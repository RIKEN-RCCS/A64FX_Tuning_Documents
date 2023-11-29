Introduction
============

What is This Document
^^^^^^^^^^^^^^^^^^^^^

This document explains tuning techniques applicable to other programs in common, based on real cases presented in
`"Meetings for application code tuning on A64FX computer systems" <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__.
These techniques are practical ones experienced in real application programs shown below:

.. list-table::
   :header-rows: 1

   * - Application area
     - Program name
   * - Electromagnetic
     - `WumingPIC2D <https://github.com/WumingCode/WumingPIC2D>`__
   * - Fluid dynamics
     - `FFVHC-ACE <https://www.klab.mech.tohoku.ac.jp/fugaku/>`__
   * -
     - `FrontFlow/X <https://www.jstage.jst.go.jp/article/seisankenkyu/70/1/70_43/_article>`__
   * -
     - `Nek5000/RS <https://github.com/Nek5000>`__
   * - Molecular dynamics
     - `GENESIS <https://www.r-ccs.riken.jp/labs/cbrt/>`__
   * -
     - `GROMACS <https://www.gromacs.org/>`__
   * -
     - `LAMMPS <https://www.lammps.org/>`__
   * - Quantum chromodynamics
     - `LQCD <https://github.com/RIKEN-LQCD/qws>`__
   * - Weather, climate
     - `SCALE <https://scale.riken.jp/>`__

The techniques are grouped by objectives, i.e., tuning effects, so that readers can find out candidates from the techniques based on programs’ profiling data such as CPU performance reports.

Structure of This Document
^^^^^^^^^^^^^^^^^^^^^^^^^^

Eight techniques are explained in this document and grouped by the following three objectives which should be focused on:

#. :doc:`simd`
#. :doc:`calcwait`
#. :doc:`cachewait`

Each explanation for the techniques consists of the following pieces:

* Motivation to apply the technique
* Applied example showing performance improvement
* Reference links to real cases presented in “Meetings for application code tuning on A64FX computer systems”
* Reference links to related information such as compiler user’s guides and programming guides

Readers who have already profiled their program’s performance are recommended to look for applicable techniques which may match their program in terms of the above objectives.

Interested readers can learn more by following each technique’s reference links to related information such as published documents in “Meetings for application code tuning on A64FX computer systems” and tuning advices in programming guides.

Environment for Performance Measurement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Performance data shown in this document was measured under the following condition.
Although C/C++ compilers were used in trad mode, ideas of the explained techniques in this document are also applicable under clang mode.

.. list-table::
   :stub-columns: 1

   * - Measured date
     - November 2023
   * - Machine
     - Supercomputer Fugaku
   * - Language environment
     - Fujitsu Fortran/C/C++ Compiler 4.9.0 (tcsds-1.2.37)
   * - Compiler optimization flags
     - -Kfast,openmp,ocl
   * - Number of processes and threads at run time
     - 4 processes, 12 threads per process

About usage of CPU performance reports which were used for observing results of performance improvement by explained techniques, please refer to the following documents such as profiler user’s guide.

* `Profiler User's Guide "Chapter 4 CPU Performance Analysis Report" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/manuals/tcsds-1.2.37/lang/Tool/j2ul-2568-01enz0.pdf#page=82>`__
* `Programming Guide (Tuning) "Investigating Bottlenecks" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Tuning_Programming_Guide.pdf#page=6>`__
* `Programming Guide (Processors) "PMU Events" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/Processors_Programming_Guide.pdf#page=46>`__
* `CPU performance tuning based on the type of application "5.1 How to read CPU performance-analysis reports" <https://www.fugaku.r-ccs.riken.jp/doc_root/en/programming_guides/app-tuning-pattern-English.pdf#page=27>`__

Notice: Access rights for
`Fugaku User Portal <https://www.fugaku.r-ccs.riken.jp/en/>`__
are required to read the above documents.
