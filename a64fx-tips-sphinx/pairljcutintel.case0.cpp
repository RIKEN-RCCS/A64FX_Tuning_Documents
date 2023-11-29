void
case0(const int vflag, const int astart, const int aend,
      const int nthreads, const int minlocal, const int f_stride,
      const int ntypes, const int _onetype, const int eatom,
      const flt_t * _noalias const special_lj,
      const FC_PACKED1_T * _noalias const ljc12o,
      const FC_PACKED2_T * _noalias const lj34,
      ATOM_T * _noalias const x,
      const int * _noalias const ilist,
      const int * _noalias const numneigh,
      const int ** _noalias const firstneigh,
      FORCE_T * _noalias f_start, double *rval)
// cf. https://github.com/lammps/lammps/blob/61483da58b58332d831169009fcb577b744f983e/src/USER-INTEL/pair_lj_cut_intel.cpp
{
  const int inum = aend - astart;
  acc_t oevdwl, ov0, ov1, ov2, ov3, ov4, ov5;
  if (EFLAG || vflag)
    oevdwl = ov0 = ov1 = ov2 = ov3 = ov4 = ov5 = (acc_t)0;
  int iifrom, iip, iito, tid;
  IP_PRE_omp_stride_id(iifrom, iip, iito, tid, inum, nthreads);
  iifrom += astart;
  iito += astart;
  int foff;
  if (NEWTON_PAIR) foff = tid * f_stride - minlocal;
  else foff = -minlocal;
  FORCE_T * _noalias const f = f_start + foff;
  if (NEWTON_PAIR) memset(f + minlocal, 0, f_stride * sizeof(FORCE_T));
  flt_t cutsq, lj1, lj2, lj3, lj4, offset;
  if (ONETYPE) {
    cutsq = ljc12o[_onetype].cutsq;
    lj1 = ljc12o[_onetype].lj1;
    lj2 = ljc12o[_onetype].lj2;
    lj3 = lj34[_onetype].lj3;
    lj4 = lj34[_onetype].lj4;
    offset = ljc12o[_onetype].offset;
  }
  for (int ii = iifrom; ii < iito; ii += iip) {
    const int i = ilist[ii];
    int itype, ptr_off;
    const FC_PACKED1_T * _noalias ljc12oi;
    const FC_PACKED2_T * _noalias lj34i;
    if (!ONETYPE) {
      itype = x[i].w;
      ptr_off = itype * ntypes;
      ljc12oi = ljc12o + ptr_off;
      lj34i = lj34 + ptr_off;
    }
    const int * _noalias const jlist = firstneigh[i];
    int jnum = numneigh[i];
    IP_PRE_neighbor_pad(jnum, offload);
    acc_t fxtmp, fytmp, fztmp, fwtmp;
    acc_t sevdwl, sv0, sv1, sv2, sv3, sv4, sv5;
    const flt_t xtmp = x[i].x;
    const flt_t ytmp = x[i].y;
    const flt_t ztmp = x[i].z;
    fxtmp = fytmp = fztmp = (acc_t)0;
    if (EFLAG) fwtmp = sevdwl = (acc_t)0;
    if (NEWTON_PAIR == 0)
      if (vflag==1) sv0 = sv1 = sv2 = sv3 = sv4 = sv5 = (acc_t)0;
#pragma loop norecurrence
    for (int jj = 0; jj < jnum; jj++) {
      flt_t forcelj, evdwl;
      forcelj = evdwl = (flt_t)0.0;
      int j, jtype, sbindex;
      if (!ONETYPE) {
	sbindex = jlist[jj] >> SBBITS & 3;
	j = jlist[jj] & NEIGHMASK;
      } else
	j = jlist[jj];
      const flt_t delx = xtmp - x[j].x;
      const flt_t dely = ytmp - x[j].y;
      const flt_t delz = ztmp - x[j].z;
      if (!ONETYPE) {
	jtype = x[j].w;
	cutsq = ljc12oi[jtype].cutsq;
      }
      const flt_t rsq = delx * delx + dely * dely + delz * delz;
      flt_t factor_lj;
      if (!ONETYPE) factor_lj = special_lj[sbindex];
      flt_t r2inv = 1.0 / rsq;
      flt_t r6inv = r2inv * r2inv * r2inv;
      if (rsq > cutsq) r6inv = (flt_t)0.0;
      if (!ONETYPE) {
	lj1 = ljc12oi[jtype].lj1;
	lj2 = ljc12oi[jtype].lj2;
      }
      forcelj = r6inv * (lj1 * r6inv - lj2);
      flt_t fpair;
      if (!ONETYPE)
	fpair = factor_lj * forcelj * r2inv;
      else
	fpair = forcelj * r2inv;
      const flt_t fpx = fpair * delx;
      fxtmp += fpx;
      if (NEWTON_PAIR) f[j].x -= fpx;
      const flt_t fpy = fpair * dely;
      fytmp += fpy;
      if (NEWTON_PAIR) f[j].y -= fpy;
      const flt_t fpz = fpair * delz;
      fztmp += fpz;
      if (NEWTON_PAIR) f[j].z -= fpz;
      if (EFLAG) {
	if (!ONETYPE) {
	  lj3 = lj34i[jtype].lj3;
	  lj4 = lj34i[jtype].lj4;
	  offset = ljc12oi[jtype].offset;
	}
	evdwl = r6inv * (lj3 * r6inv - lj4);
	if (rsq < cutsq) evdwl -= offset;
	if (!ONETYPE) evdwl *= factor_lj;
	sevdwl += evdwl;
	if (eatom) {
	  fwtmp += (flt_t)0.5 * evdwl;
	  if (NEWTON_PAIR)
	    f[j].w += (flt_t)0.5 * evdwl;
	}
      }
      if (NEWTON_PAIR == 0)
	IP_PRE_ev_tally_nborv(vflag, delx, dely, delz, fpx, fpy, fpz);
    }
    if (NEWTON_PAIR) {
      f[i].x += fxtmp;
      f[i].y += fytmp;
      f[i].z += fztmp;
    } else {
      f[i].x = fxtmp;
      f[i].y = fytmp;
      f[i].z = fztmp;
    }
    IP_PRE_ev_tally_atom(NEWTON_PAIR, EFLAG, vflag, f, fwtmp);
  }
  IP_PRE_fdotr_reduce_omp(NEWTON_PAIR, nall, minlocal, nthreads, f_start,
			  f_stride, x, offload, vflag, ov0, ov1, ov2, ov3,
			  ov4, ov5);
  return;
}
