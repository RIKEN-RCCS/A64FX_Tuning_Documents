void
case0(int element, double *ggeo, double s_D[p_Nq][p_Nq],
      double s_q[p_Nq][p_Nq][p_Nq], double s_Gqr[p_Nq][p_Nq][p_Nq],
      double s_Gqs[p_Nq][p_Nq][p_Nq], double s_Gqt[p_Nq][p_Nq][p_Nq],
      double *rval)
// cf. https://www.hpci-office.jp/documents/meeting_A64FX/220428/20220428_Performance_Tuning_on_Fugaku-tj-rev0.pdf#page=15
{
  for(int k = 0; k < p_Nq; ++k) {
    for(int j = 0; j < p_Nq; ++j) {
      for(int i = 0; i < p_Nq; ++i) {
	const int gbase
	  = element * p_Nggeo * p_Np + k * p_Nq * p_Nq + j * p_Nq + i;
	const double r_G00 = ggeo[gbase + p_G00ID * p_Np];
	const double r_G01 = ggeo[gbase + p_G01ID * p_Np];
	const double r_G11 = ggeo[gbase + p_G11ID * p_Np];
	const double r_G12 = ggeo[gbase + p_G12ID * p_Np];
	const double r_G02 = ggeo[gbase + p_G02ID * p_Np];
	const double r_G22 = ggeo[gbase + p_G22ID * p_Np];
	double qr = 0.f;
	double qs = 0.f;
	double qt = 0.f;
	for(int m = 0; m < p_Nq; m++) {
	  qr += s_D[i][m] * s_q[k][j][m];
	  qs += s_D[j][m] * s_q[k][m][i];
	  qt += s_D[k][m] * s_q[m][j][i];
	}
	s_Gqr[k][j][i] = r_G00 * qr + r_G01 * qs + r_G02 * qt;
	s_Gqs[k][j][i] = r_G01 * qr + r_G11 * qs + r_G12 * qt;
	s_Gqt[k][j][i] = r_G02 * qr + r_G12 * qs + r_G22 * qt;
      }
    }
  }
  return;
}
