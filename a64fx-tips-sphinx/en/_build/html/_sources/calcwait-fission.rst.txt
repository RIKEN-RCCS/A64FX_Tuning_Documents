Fission of Loop with Large Loop Body
------------------------------------

Motivation
^^^^^^^^^^

Fujitsu Fortran/C/C++ compilers try to apply a compiler optimization of software pipelining for exploiting computational performance of A64FX processors.
However, since this optimization consumes more floating-point/integer/predicate registers on A64FX processors than usual, there are cases where the software pipelining can not be applied due to register shortage when a loop of optimization target has a large loop body.

In such cases, users can
**advise the compilers to distribute a loop with a large loop body automatically**,
by inserting an Optimization Control Line (OCL) of “loop_fission_target” into the source program.

As a result, a loop with a large loop body on the source program is treated by the compilers as several loops with small loop bodies so that compiler optimizations such as the software pipelining and register allocation are promoted and it might lead to reduction of execution time.

Applied Example
^^^^^^^^^^^^^^^

Referring to an example presented in
`“Meetings for application code tuning on A64FX computer systems” <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__,
performance improvement by applying this technique is shown below.
In this example, an OCL of “loop_fission_target” was added to a loop for do-variable ii, which has a large loop body.

.. literalinclude:: ../elecur.case0.F90
   :language: fortran
   :lines: 16-102
   :caption: Original

.. code-block:: fortran
   :caption: Technique applied
   :emphasize-lines: 1

   !OCL LOOP_FISSION_TARGET(LS)
     do ii=cumcnt(i,j,k,isp)+1,cumcnt(i+1,j,k,isp)
        ...
     enddo

Results of cycle accounting for executions before/after applying the technique are shown in graphs below.
A parameter for the loop execution is as follows:

  cumcnt(i+1,j,k,isp) - cumcnt(i,j,k,isp) = 20

Comparing the right graph for the technique applied to the left graph for the original, busy and waiting time for integer calculation decreased dramatically and execution time was reduced by 44%.
At the time, decrease of busy and waiting time for L1D cache access is considered as a result of suppressing register spill/fill behavior of the processor by loop fission.

.. image:: ../elecur.29503716.0.png
   :width: 49%

.. image:: ../elecur.29503716.2.png
   :width: 49%

Real Cases
^^^^^^^^^^

Real cases related to this technique are presented in
`“Meetings for application code tuning on A64FX computer systems” <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
as follows:

* `LQCD tuning on Fugaku <https://www.hpci-office.jp/documents/meeting_A64FX/201223/LQCD_A64FX_20201223.pdf#page=17>`__
* `Performance tuning on LAMMPS for A64FX system <https://www.hpci-office.jp/documents/meeting_A64FX/210427/lmp_tune_for_a64fx_27Apr2021_final.pdf#page=20>`__
* `CPU and Thread Parallelization Tuning of FFVHC-ACE on Fugaku <https://www.hpci-office.jp/documents/meeting_A64FX/210427/Tuning_of_FFVHC-ACE.pdf#page=15>`__
* `Examples of serial-code optimization for A64FX processor cores <https://www.hpci-office.jp/documents/meeting_A64FX/220727/Examples_of_serial-code_opt_for_A64FX-RIST-20220725.pdf#page=8>`__

References
^^^^^^^^^^

* `Fortran User's Guide "9.1.2.11 Loop Fission" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/Fortran/j2ul-2558-01enz0.pdf#page=270>`__
* `C User's Guide "3.3.10 Loop Fission" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/C/j2ul-2560-01enz0.pdf#page=77>`__
* `C++ User's Guide "3.3.10 Loop Fission" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/C++/j2ul-2561-01enz0.pdf#page=80>`__
* `Programming Guide (Fortran) "LOOP_FISSION" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Fortran_Programming_Guide.pdf#page=54>`__
* `CPU performance tuning based on the type of application "5.2 Tuning technique 1: Optimizing instruction scheduling" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/app-tuning-pattern-English.pdf#page=28>`__

Notice: Access rights for
`Fugaku User Portal <https://www.fugaku.r-ccs.riken.jp/en/>`__
are required to read the above documents.
