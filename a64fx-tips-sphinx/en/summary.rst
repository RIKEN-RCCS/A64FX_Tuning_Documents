Summary
=======

This document explained tuning techniques applicable to other programs in common, based on real cases presented in
`“Meetings for application code tuning on A64FX computer systems” <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__.
These techniques showed the following speedup for loops in applied examples.

.. list-table::
   :header-rows: 1

   * - Objective
     - Technique
     - Speedup for applied loop
   * - :doc:`simd`
     - :doc:`simd-interchange1`
     - 3.04 x
   * -
     - :doc:`simd-interchange2`
     - 2.02 x
   * -
     - :doc:`simd-fission`
     - 1.19 x
   * - :doc:`calcwait`
     - :doc:`calcwait-fission`
     - 1.78 x
   * -
     - :doc:`calcwait-striping`
     - 1.37 x
   * - :doc:`cachewait`
     - :doc:`cachewait-unroll`
     - 3.35 x
   * -
     - :doc:`cachewait-soa`
     - 1.51 x
   * -
     - :doc:`cachewait-contiguous`
     - 1.79 x

Readers considering speedup of their program are recommended to look for applicable ones from these techniques, which may match the program, referring to the program’s profiling data such as CPU performance reports.
