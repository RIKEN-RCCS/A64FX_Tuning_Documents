SUBROUTINE case2(IA, JA, rd_kmax, chmax, ngas, i, j, igas, iw, gasno, indexP, &
     gas, dz_std, factP, factT32, factT21, tauGAS, rval)
  ! cf. https://www.hpci-office.jp/documents/meeting_A64FX/201209/20201209_A64FX-tuning_yamaura.pdf#page=13
  ! cf. https://github.com/scale-met/scale/blob/5.4.1/scalelib/src/atmosphere/physics/radiation/scale_atmos_phy_rd_mstrnx.F90
  USE dtrn3, ONLY: igasabs, AKD => AKD_t
  IMPLICIT NONE
  INTEGER, PARAMETER :: RP=KIND(0.0D0)
  REAL(KIND=RP), PARAMETER :: PPM=1.E-6_RP
  INTEGER :: IA, JA, rd_kmax, chmax, ngas, i, j, igas, iw, gasno, k, ip, ich
  INTEGER, DIMENSION(rd_kmax) :: indexP
  REAL(KIND=RP), DIMENSION(rd_kmax,IA,JA,ngas) :: gas         
  REAL(KIND=RP), DIMENSION(rd_kmax) :: dz_std, factP, factT32, factT21
  REAL(KIND=RP), DIMENSION(rd_kmax,chmax) :: tauGAS
  REAL(KIND=RP) :: length, A1, A2, A3, factPT
  REAL(KIND=8) :: rval

  do ich = 1, chmax
     do k = 1, rd_kmax
        ip = indexP(k)
        A1 = AKD(ip-1,ich,1,gasno,iw) * ( 1.0_RP - factP(k) )&
             + AKD(ip ,ich,1,gasno,iw) * ( factP(k) )
        A2 = AKD(ip-1,ich,2,gasno,iw) * ( 1.0_RP - factP(k) )&
             + AKD(ip ,ich,2,gasno,iw) * ( factP(k) )
        A3 = AKD(ip-1,ich,3,gasno,iw) * ( 1.0_RP - factP(k) )&
             + AKD(ip ,ich,3,gasno,iw) * ( factP(k) )
        factPT = factT32(k)*(A3-A2) + A2 + factT21(k)*(A2-A1)
        length = gas(k,i,j,igasabs(igas,iw)) * PPM * dz_std(k)
        tauGAS(k,ich) = tauGAS(k,ich) + 10.0_RP**factPT * length
     enddo
  enddo
END SUBROUTINE case2
