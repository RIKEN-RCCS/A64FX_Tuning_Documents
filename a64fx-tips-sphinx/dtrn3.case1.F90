SUBROUTINE case1(IA, JA, rd_kmax, chmax, ngas, i, j, igas, iw, gasno, indexP, &
     gas, dz_std, factP, factT32, factT21, tauGAS, rval)
  USE dtrn3, ONLY: igasabs, AKD => AKD_n
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

!OCL LOOP_NOINTERCHANGE
  do k = 1, rd_kmax
     ip = indexP(k)
     length = gas(k,i,j,igasabs(igas,iw)) * PPM * dz_std(k)
     do ich = 1, chmax
        A1 = AKD(ich,ip-1,1,gasno,iw) * ( 1.0_RP - factP(k) )&
             + AKD(ich,ip ,1,gasno,iw) * ( factP(k) )
        A2 = AKD(ich,ip-1,2,gasno,iw) * ( 1.0_RP - factP(k) )&
             + AKD(ich,ip ,2,gasno,iw) * ( factP(k) )
        A3 = AKD(ich,ip-1,3,gasno,iw) * ( 1.0_RP - factP(k) )&
             + AKD(ich,ip ,3,gasno,iw) * ( factP(k) )
        factPT = factT32(k)*(A3-A2) + A2 + factT21(k)*(A2-A1)
        tauGAS(k,ich) = tauGAS(k,ich) + 10.0_RP**factPT * length
     enddo
  enddo
END SUBROUTINE case1
