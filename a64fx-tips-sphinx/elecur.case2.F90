SUBROUTINE case2(nxgs, nxge, nys, nye, nzs, nze, np, nsp, i, j, k, isp, &
     delx, idelx, idelt, cumcnt, up, gp, q, pjx, pjy, pjz, rval)
  ! cf. sample/tune_rist/field.f90 in sample.tar.bz2
  IMPLICIT NONE
  REAL(KIND=8), PARAMETER :: fac = 1.D0/3.D0
  INTEGER :: nxgs, nxge, nys, nye, nzs, nze, np, nsp, i, j, k, isp, &
       ii, i2, inc, ip, jp, kp
  INTEGER, DIMENSION(nxgs:nxge,nys:nye,nzs:nze,nsp) :: cumcnt
  REAL(KIND=8) :: delx, idelx, idelt, rval, dh, s1_1, s1_2, s1_3, &
       smo_1, smo_2, smo_3, pjtmpx, pjtmpy, pjtmpz, dstmpx, dstmpy, dstmpz
  REAL(KIND=8), DIMENSION(6,np,nys:nye,nzs:nze,nsp) :: up, gp
  REAL(KIND=8), DIMENSION(nsp) :: q
  REAL(KIND=8), DIMENSION(-2:2,-2:2,-2:2) :: pjx, pjy, pjz
  REAL(KIND=8), DIMENSION(-2:2) :: s0x, s0y, s0z, dsx, dsy, dsz

!OCL LOOP_FISSION_TARGET(LS)
  do ii=cumcnt(i,j,k,isp)+1,cumcnt(i+1,j,k,isp)
     dh = up(1,ii,j,k,isp)*idelx-0.5-i
     s0x(-2) = 0.D0
     s0x(-1) = 0.5*(0.5-dh)*(0.5-dh)
     s0x( 0) = 0.75-dh*dh
     s0x(+1) = 0.5*(0.5+dh)*(0.5+dh)
     s0x(+2) = 0.D0
     dh = up(2,ii,j,k,isp)*idelx-0.5-j
     s0y(-2) = 0.D0
     s0y(-1) = 0.5*(0.5-dh)*(0.5-dh)
     s0y( 0) = 0.75-dh*dh
     s0y(+1) = 0.5*(0.5+dh)*(0.5+dh)
     s0y(+2) = 0.D0
     dh = up(3,ii,j,k,isp)*idelx-0.5-k
     s0z(-2) = 0.D0
     s0z(-1) = 0.5*(0.5-dh)*(0.5-dh)
     s0z( 0) = 0.75-dh*dh
     s0z(+1) = 0.5*(0.5+dh)*(0.5+dh)
     s0z(+2) = 0.D0
     i2 = int(gp(1,ii,j,k,isp)*idelx)
     dh = gp(1,ii,j,k,isp)*idelx-0.5-i2
     inc = i2-i
     s1_1 = 0.5*(0.5-dh)*(0.5-dh)
     s1_2 = 0.75-dh*dh
     s1_3 = 0.5*(0.5+dh)*(0.5+dh)
     smo_1 = -(inc-abs(inc))*0.5+0
     smo_2 = -abs(inc)+1
     smo_3 = (inc+abs(inc))*0.5+0
     dsx(-2) = s1_1*smo_1
     dsx(-1) = s1_1*smo_2+s1_2*smo_1
     dsx( 0) = s1_2*smo_2+s1_3*smo_1+s1_1*smo_3
     dsx(+1) = s1_3*smo_2+s1_2*smo_3
     dsx(+2) = s1_3*smo_3
     i2 = int(gp(2,ii,j,k,isp)*idelx)
     dh = gp(2,ii,j,k,isp)*idelx-0.5-i2
     inc = i2-j
     s1_1 = 0.5*(0.5-dh)*(0.5-dh)
     s1_2 = 0.75-dh*dh
     s1_3 = 0.5*(0.5+dh)*(0.5+dh)
     smo_1 = -(inc-abs(inc))*0.5+0
     smo_2 = -abs(inc)+1
     smo_3 = (inc+abs(inc))*0.5+0
     dsy(-2) = s1_1*smo_1
     dsy(-1) = s1_1*smo_2+s1_2*smo_1
     dsy( 0) = s1_2*smo_2+s1_3*smo_1+s1_1*smo_3
     dsy(+1) = s1_3*smo_2+s1_2*smo_3
     dsy(+2) = s1_3*smo_3
     i2 = int(gp(3,ii,j,k,isp)*idelx)
     dh = gp(3,ii,j,k,isp)*idelx-0.5-i2
     inc = i2-k
     s1_1 = 0.5*(0.5-dh)*(0.5-dh)
     s1_2 = 0.75-dh*dh
     s1_3 = 0.5*(0.5+dh)*(0.5+dh)
     smo_1 = -(inc-abs(inc))*0.5+0
     smo_2 = -abs(inc)+1
     smo_3 = (inc+abs(inc))*0.5+0
     dsz(-2) = s1_1*smo_1
     dsz(-1) = s1_1*smo_2+s1_2*smo_1
     dsz( 0) = s1_2*smo_2+s1_3*smo_1+s1_1*smo_3
     dsz(+1) = s1_3*smo_2+s1_2*smo_3
     dsz(+2) = s1_3*smo_3
     dsx(-2:2) = dsx(-2:2)-s0x(-2:2)
     dsy(-2:2) = dsy(-2:2)-s0y(-2:2)
     dsz(-2:2) = dsz(-2:2)-s0z(-2:2)
!OCL UNROLL('FULL')
     do kp=-2,2
        do jp=-2,2
           pjtmpx = 0.D0
           pjtmpy = 0.D0
           pjtmpz = 0.D0
           dstmpx =  (s0y(jp)+0.5*dsy(jp))*s0z(kp) &
                +(0.5*s0y(jp)+fac*dsy(jp))*dsz(kp)
           dstmpy =  (s0x(jp)+0.5*dsx(jp))*s0z(kp) &
                +(0.5*s0x(jp)+fac*dsx(jp))*dsz(kp)
           dstmpz =  (s0x(jp)+0.5*dsx(jp))*s0y(kp) &
                +(0.5*s0x(jp)+fac*dsx(jp))*dsy(kp)
           do ip=-2,1
              pjtmpx = pjtmpx-q(isp)*delx*idelt*dsx(ip)*dstmpx
              pjtmpy = pjtmpy-q(isp)*delx*idelt*dsy(ip)*dstmpy
              pjtmpz = pjtmpz-q(isp)*delx*idelt*dsz(ip)*dstmpz
              pjx(ip+1,jp,kp) = pjx(ip+1,jp,kp)+pjtmpx
              pjy(ip+1,jp,kp) = pjy(ip+1,jp,kp)+pjtmpy
              pjz(ip+1,jp,kp) = pjz(ip+1,jp,kp)+pjtmpz
           enddo
        enddo
     enddo
  enddo
END SUBROUTINE case2
