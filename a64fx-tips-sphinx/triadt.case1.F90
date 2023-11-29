  SUBROUTINE case1(n, dtarg, scalar)
    ! cf. https://www.cs.virginia.edu/stream/FTP/Code/stream.f
    IMPLICIT NONE
    INTEGER :: n, i
    TYPE(dtype), TARGET :: dtarg
    REAL(KIND=8) :: scalar
    REAL(KIND=8), DIMENSION(:), POINTER, CONTIGUOUS :: pa, pb, pc

    pa => dtarg%a
    pb => dtarg%b
    pc => dtarg%c
!$OMP PARALLEL DO
!OCL NORECURRENCE
    DO i = 1, n
       pa(i) = pb(i) + scalar * pc(i)
    END DO
  END SUBROUTINE case1
