Striping of Innermost Loop with Small Iteration Count
-----------------------------------------------------

Motivation
^^^^^^^^^^

Fujitsu Fortran/C/C++ compilers try to apply a compiler optimization of software pipelining for exploiting computational performance of A64FX processors.
However, since the software pipelining schedules calculations for several different loop iterations to be executed in parallel, there are cases where effect of the optimization can not be obtained when a loop of optimization target has a small iteration count.

In such cases, users can
**advise the compilers to apply an optimization of loop striping**
as shown below, by inserting an Optimization Control Line (OCL) of “striping” into the source program.

.. code-block:: fortran
   :caption: Source program

   DO i = 1, n
     a(i) = b(i) + c(i)
   END DO

.. code-block:: fortran
   :caption: Pseudo code after applying loop striping
   :emphasize-lines: 1

   DO i = 1, n, 2
     tmp_b1 = b(i)
     tmp_b2 = b(i+1)
     tmp_c1 = c(i)
     tmp_c2 = c(i+1)
     tmp_a1 = tmp_b1 + bmp_c1
     tmp_a2 = tmp_b2 + tmp_c2
     a(i) = tmp_a1
     a(i+1) = tmp_a2
   END DO

As a result, even if the iteration count is relatively small, calculations for different loop iterations are executed in parallel and it might lead to reduction of execution time.

Applied Example
^^^^^^^^^^^^^^^

Referring to an example presented in
`“Meetings for application code tuning on A64FX computer systems” <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__,
performance improvement by applying this technique is shown below.
In this example, an OCL of “striping” was added to a loop for for-variable jj, which has a relatively small iteration count.

.. literalinclude:: ../pairljcutintel.case0.cpp
   :language: c++
   :lines: 60-120
   :caption: Original

.. code-block:: c++
   :caption: Technique applied
   :emphasize-lines: 2

   #pragma loop norecurrence
   #pragma loop striping 2
       for (int jj = 0; jj < jnum; jj++) {
         ...
       }

Results of cycle accounting for executions before/after applying the technique are shown in graphs below.
Parameters for the loop execution are as follows:

  ONETYPE =1, EFLAG = 0, NEWTON_PAIR = 1, jnum = 26~49 (37.5 on average)

Comparing the right graph for the technique applied to the left graph for the original, waiting time for floating-point calculation and L1D cache access decreased and execution time was reduced by 27%.
In this example, decrease of waiting time for L1D cache access is considered to be due to many non-contiguous array references.

.. image:: ../pairljcutintel.29503716.0.png
   :width: 49%

.. image:: ../pairljcutintel.29503716.1.png
   :width: 49%

Real Cases
^^^^^^^^^^

Real cases related to this technique are presented in
`“Meetings for application code tuning on A64FX computer systems” <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
as follows:

* `Performance tuning on LAMMPS for A64FX system <https://www.hpci-office.jp/documents/meeting_A64FX/210427/lmp_tune_for_a64fx_27Apr2021_final.pdf#page=12>`__
* `Porting and optimizing GROMACS on Fugaku <https://www.hpci-office.jp/documents/meeting_A64FX/220727/GROMACS_A64fx.pdf#page=17>`__

References
^^^^^^^^^^

* `Fortran User's Guide "9.1.2.4 Loop Striping" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/Fortran/j2ul-2558-01enz0.pdf#page=265>`__
* `C User's Guide "3.3.4 Loop Striping" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/C/j2ul-2560-01enz0.pdf#page=74>`__
* `C++ User's Guide "3.3.4 Loop Striping" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/C++/j2ul-2561-01enz0.pdf#page=77>`__
* `Programming Guide (Programming common part) "Loop Optimization and Instruction Scheduling" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Programming_common_part_Programming_Guide.pdf#page=122>`__
* `Programming Guide (Fortran) "Loop Expansion" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Fortran_Programming_Guide.pdf#page=44>`__
* `Programming Guide (Fortran) "STRIPING" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Fortran_Programming_Guide.pdf#page=52>`__
* `Programming Guide (Tuning) "Specifying the Number of Striping (Interleaving) Expansions and Suppressing Software Pipelining" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Tuning_Programming_Guide.pdf#page=194>`__

Notice: Access rights for
`Fugaku User Portal <https://www.fugaku.r-ccs.riken.jp/en/>`__
are required to read the above documents.
