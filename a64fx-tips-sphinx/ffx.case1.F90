SUBROUTINE case1(NG3, NP, V1, V2, V3, V4, F, CVEL, rval)
  ! cf. https://www.hpci-office.jp/documents/meeting_A64FX/220727/Examples_of_serial-code_opt_for_A64FX-RIST-20220725.pdf#page=14
  IMPLICIT NONE
  INTEGER :: NG3, NP, IG, IP
  REAL(KIND=8), DIMENSION(NG3) :: V1, V2, V3, V4
  REAL(KIND=8), DIMENSION(NG3,NP) :: F
  REAL(KIND=8), DIMENSION(3,NP) :: CVEL
  REAL(KIND=8) :: rval, FBUF

!$OMP PARALLEL DO PRIVATE(FBUF)
  DO IG = 1, NG3
     V1(IG) = 0.D0
     V2(IG) = 0.D0
     V3(IG) = 0.D0
     V4(IG) = 0.D0
!OCL FULLUNROLL_PRE_SIMD
     DO IP = 1, 15
        FBUF = F(IG,IP)
        V1(IG) = V1(IG) + FBUF
        V2(IG) = V2(IG) + FBUF*CVEL(1,IP)
        V3(IG) = V3(IG) + FBUF*CVEL(2,IP)
        V4(IG) = V4(IG) + FBUF*CVEL(3,IP)
     END DO
  END DO
END SUBROUTINE case1
