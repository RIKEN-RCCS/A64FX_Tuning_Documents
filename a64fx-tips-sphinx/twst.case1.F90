SUBROUTINE case1(IA, JA, rd_kmax, chmax, i, j, cldfrac, R0, T0, Em, Ep, &
     R12mns_n, R12pls_n, E12mns_n, E12pls_n, rval)
  ! cf. https://www.hpci-office.jp/documents/meeting_A64FX/201209/20201209_A64FX-tuning_yamaura.pdf#page=9
  ! cf. https://github.com/scale-met/scale/blob/5.4.1/scalelib/src/atmosphere/physics/radiation/scale_atmos_phy_rd_mstrnx.F90
  IMPLICIT NONE
  INTEGER, PARAMETER :: RP=KIND(0.0D0)
  INTEGER, PARAMETER :: MSTRN_ncloud=2, I_ClearSky=1, I_Cloud=2
  INTEGER :: IA, JA, rd_kmax, chmax, i, j, ich, icloud, k, ic, kk
  REAL(RP), DIMENSION(rd_kmax,IA,JA) :: cldfrac
  REAL(RP), DIMENSION(rd_kmax,MSTRN_ncloud,chmax) :: R0, T0
  REAL(RP), DIMENSION(rd_kmax+1,MSTRN_ncloud*chmax) :: Em, Ep
  REAL(RP), DIMENSION(rd_kmax+1,MSTRN_ncloud*chmax) :: &
       R12mns_n, R12pls_n, E12mns_n, E12pls_n
  REAL(RP), DIMENSION(MSTRN_ncloud*chmax,rd_kmax+1) :: &
       R12mns, R12pls, E12mns, E12pls
  REAL(RP), DIMENSION(rd_kmax,MSTRN_ncloud*chmax) :: cf
  REAL(RP), DIMENSION(rd_kmax+1,MSTRN_ncloud*chmax) :: R, T
  REAL(KIND=8) :: rval

  do k = 1, rd_kmax+1
     do ic = 1, chmax * MSTRN_ncloud
        R12mns(ic,k) = R12mns_n(k,ic)
        R12pls(ic,k) = R12pls_n(k,ic)
        E12mns(ic,k) = E12mns_n(k,ic)
        E12pls(ic,k) = E12pls_n(k,ic)
     end do
  end do
  do ich = 1, chmax
     do icloud = 1, 2
        ic = (ich - 1) * MSTRN_ncloud + icloud
        if (icloud == 1) then
           do k = 1, rd_kmax
              cf(k, ic) = 0.0_RP
           end do
        else
           do k = 1, rd_kmax
              cf(k, ic) = cldfrac(k,i,j)
           end do
        end if
     end do
  end do
  do ich = 1, chmax
     do icloud = 1, 2
        ic = (ich - 1) * MSTRN_ncloud + icloud
        do k = 1, rd_kmax
           R(k,ic) = (cf(k,ic)) * R0(k,I_Cloud,ich) &
                + (1.0_RP - cf(k,ic)) * R0(k,I_ClearSky,ich)
           T(k,ic) = (cf(k,ic)) * T0(k,I_Cloud,ich) &
                + (1.0_RP - cf(k,ic)) * T0(k,I_ClearSky,ich)
        end do
        R(rd_kmax+1,:) = 0
        T(rd_kmax+1,:) = 0
     end do
  end do
  do kk = 1, rd_kmax
     do ic = 1, chmax * MSTRN_ncloud
        k = rd_kmax - kk + 1
        R12pls(ic,k) = R(k,ic) + T(k,ic) / (1.0_RP - R12pls(ic,k+1) * R(k,ic)) &
             * (R12pls(ic,k+1) * T(k,ic))
        E12mns(ic,k) = Em(k,ic) + T(k,ic) / (1.0_RP - R12pls(ic,k+1) * R(k,ic)) &
             * (R12pls(ic,k+1) * Ep(k,ic) + E12mns(ic,k+1))
        k = kk + 1
        R12mns(ic,k) = R(k,ic) + T(k,ic) / (1.0_RP - R12mns(ic,k-1) * R(k,ic)) &
             * (R12mns(ic,k-1) * T(k,ic))
        E12pls(ic,k) = Ep(k,ic) + T(k,ic) / (1.0_RP - R12mns(ic,k-1) * R(k,ic)) &
             * (R12mns(ic,k-1) * Em(k,ic) + E12pls(ic,k-1))
     end do
  end do
  do ic = 1, chmax * MSTRN_ncloud
     do k = 1, rd_kmax+1
        R12mns_n(k,ic) = R12mns(ic,k)
        R12pls_n(k,ic) = R12pls(ic,k)
        E12mns_n(k,ic) = E12mns(ic,k)
        E12pls_n(k,ic) = E12pls(ic,k)
     end do
  end do
END SUBROUTINE case1
