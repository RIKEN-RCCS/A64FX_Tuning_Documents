SUBROUTINE case0(IA, JA, rd_kmax, chmax, i, j, cldfrac, R0, T0, Em, Ep, &
     R12mns, R12pls, E12mns, E12pls, rval)
  ! cf. https://www.hpci-office.jp/documents/meeting_A64FX/201209/20201209_A64FX-tuning_yamaura.pdf#page=8
  ! cf. https://github.com/scale-met/scale/blob/5.4.1/scalelib/src/atmosphere/physics/radiation/scale_atmos_phy_rd_mstrnx.F90
  IMPLICIT NONE
  INTEGER, PARAMETER :: RP=KIND(0.0D0)
  INTEGER, PARAMETER :: MSTRN_ncloud=2, I_ClearSky=1, I_Cloud=2
  INTEGER :: IA, JA, rd_kmax, chmax, i, j, ich, icloud, k, ic
  REAL(RP), DIMENSION(rd_kmax,IA,JA) :: cldfrac
  REAL(RP), DIMENSION(rd_kmax,MSTRN_ncloud,chmax) :: R0, T0
  REAL(RP), DIMENSION(rd_kmax+1,MSTRN_ncloud*chmax) :: Em, Ep
  REAL(RP), DIMENSION(rd_kmax+1,MSTRN_ncloud*chmax) :: &
       R12mns, R12pls, E12mns, E12pls
  REAL(RP), DIMENSION(rd_kmax) :: cf
  REAL(RP), DIMENSION(rd_kmax+1) :: R, T
  REAL(KIND=8) :: rval

  do ich = 1, chmax
     do icloud = 1, 2
        ic = (ich - 1) * MSTRN_ncloud + icloud
        if (icloud == 1) then
           do k = 1, rd_kmax
              cf(k) = 0.0_RP
           end do
        else
           do k = 1, rd_kmax
              cf(k) = cldfrac(k,i,j)
           end do
        end if
        R(rd_kmax+1) = 0
        T(rd_kmax+1) = 0
        do k = rd_kmax, 1, -1
           R(k) = (cf(k)) * R0(k,I_Cloud,ich) &
                + (1.0_RP - cf(k)) * R0(k,I_ClearSky,ich)
           T(k) = (cf(k)) * T0(k,I_Cloud,ich) &
                + (1.0_RP - cf(k)) * T0(k,I_ClearSky,ich)
           R12pls(k,ic) = R(k) + T(k) / (1.0_RP - R12pls(k+1,ic) * R(k)) &
                * (R12pls(k+1,ic) * T(k))
           E12mns(k,ic) = Em(k,ic) + T(k) / ( 1.0_RP - R12pls(k+1,ic) * R(k)) &
                * (R12pls(k+1,ic) * Ep(k,ic) + E12mns(k+1,ic))
        end do
        do k = 2, rd_kmax+1
           R12mns(k,ic) = R(k) + T(k) / (1.0_RP - R12mns(k-1,ic) * R(k)) &
                * (R12mns(k-1,ic) * T(k))
           E12pls(k,ic) = Ep(k,ic) + T(k) / (1.0_RP - R12mns(k-1,ic) * R(k)) &
                * (R12mns(k-1,ic) * Em(k,ic) + E12pls(k-1,ic))
        end do
     end do
  end do
END SUBROUTINE case0
