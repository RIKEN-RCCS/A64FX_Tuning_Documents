.. _Section2:

Target performance and procedure of tuning 
===========================================

This chapter describes the target performance, conditions, and the
procedure for tuning the Application.

Target performance and conditions
---------------------------------

The followings are the target performance and conditions for tuning the
Application.

-  Target performance


   The execution time of the initial A64FX version of the Application
   was about two times longer than the x86 version. Therefore, to
   achieve the same or better than the performance of the x86 version,
   the target performance was decided to reduce the execution time by
   more than half.
   
   

-  Conditions

   The followings are the conditions in this tuning work.

   -  Compilation

      -  Version: tcsds-1.2.26

      -  Options: -Ofast -flto -ffj-ocl -Nclang -Koptmsg=2
         -funsafe-math-optimizations -Wno-comment -Nlst=t -mllvm

       \* After performing thread parallelization, “-Kopenmp” was added to
       the above.

   -  Execution

      -  Computer system: PRIMEHPC FX1000, which has the same architecture
         as Fugaku

      -  Version of middleware: tcsds-1.2.26

      -  | Parallel number: 480 MPI processes using 480 CPU cores with 10 nodes
      
         \* Even after performing thread parallelization, it was executed with
         480 MPI processes and 1 thread per MPI process, unless otherwise
         specified.

      -  Model: Aerodynamics of transonic-flow around aircraft (14 million
         cells, steady state analysis)


         \* Typically, the calculation of this model requires to be iterated
         until steady state is achieved. But in this case, the number of
         iterations was fixed at 100.
         This model was selected for its ease of performance evaluation. It
         might be smaller than the model used in the larger-scale
         simulations that most users require, but it is expected that tuning
         improvements with this model would also be effective to
         larger-scale simulations.

    
    
.. _TuningMethods:


Procedure of tuning
-------------------

The following is the procedure of tuning the Application.

1. **Evaluate the performance of the Application**

   The execution time of the entire Application before performing the
   tuning, this document refers to the version before tuning as the
   initial version, was measured in order to use for comparison with the
   performance after performing the tuning. Also, the execution time of
   each measurement region, which was defined as each algorithm or a
   bulk of algorithms, was measured in order to make it easier to
   evaluate the effects of tuning. The measurement results are described
   in Section 3.1 (:ref:`ElapsedTime`).

2. **Measure the cost of each function**

   Since the Application is too large and complex, it was difficult to
   use the fapp (Fujitsu Advanced Performance Profiler) for measuring the
   performance information of the entire Application or the measurement
   region. Therefore, fipp (Fujitsu Instant Performance Profiler) was used for
   measuring the cost of each function in the Application to focus on
   the target functions for tuning, then fapp was used for measuring the
   performance information of such functions or loops (in step 3). The
   measurement results of fipp are described in Section 3.2 (:ref:`fippCost`).

   Note that usage of the profiler is described in “Development Studio
   Profiler User’s Guide” on the user portal.
   

3. **Tune the Application**

   The following procedure, from 3-1 to 3-4, was repeated to achieve the target performance. 
   In this tuning work, each tuning item described in Section 3.3.1 (:ref:`TuningList`)
   covers performing a series of steps from 3-1 to 3-4.


    3-1. **Select the target for tuning**

         The tuning priority was determined based on the cost of each function
         (output by fipp), and the source code was checked starting from the
         function with the high cost, and then functions containing loops with
         potential for performance improvement were selected as targets for
         tuning. On the other hand, some functions, even with low cost, were
         also selected as targets for tuning if it was expected to improve the
         entire Application performance.

    3-2. **Analyze**

         The functions or loops selected as tuning target in step 3-1 were
         analyzed with the compiler optimization messages and/or the results
         of fapp, and then the tuning plan was determined. In some cases,
         tuning priorities were changed or abandoned in view of the ease of
         tuning and prospects for performance improvement.

    3-3. **Tune**

         Tuning was performed according to the tuning plan that was
         determined in step 3-2.

    3-4. **Evaluate**
    
         The performance after performing the tuning was evaluated using the
         fipp or fapp as follows.

         -  fipp

          Using fipp, the cost information of target functions and the entire
          Application before performing the tuning of step 3-3 is compared with
          that after performing the tuning.

         -  fapp


          Using fapp, after narrowing region of the evaluation, “cycle
          accounting” before performing the tuning of step 3-3 was compared
          with that after performing the tuning. “cycle accounting” represents
          the breakdown of execution time of a program per process. In each
          graph of “cycle accounting” in the following sections, “cycle
          accounting” of 12 processes which were allocated onto one CMG (Core
          Memory Group) was shown. Note that region of the evaluation using
          fapp depends on the tuning items.

           
4. **Measure the performance of the Application**

   After performing the tuning, the execution time was measured in the same
   way as in step 1. The measurement results are described in Section
   3.3.2 (:ref:`TuningResult`). As a result, 44 times of tuning (step 3) and 13 times of
   measuring the performance of the Application (step 4) was performed in
   this tuning work.





