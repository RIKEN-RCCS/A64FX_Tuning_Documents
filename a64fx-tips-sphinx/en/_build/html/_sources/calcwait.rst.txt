Reduction of Waiting Time for Calculation
=========================================

When CPU performance analysis reports show higher ratio of waiting time for floating-point/integer calculation on cycle accounting, there might be room to check and promote compiler optimizations.
Effective techniques for such cases are explained in this section.

.. toctree::
   :maxdepth: 1

   calcwait-fission
   calcwait-striping

On cycle accounting, waiting time for calculation and cache access is distinguished for each CPU cycle by execution status of the oldest in-flight CPU instruction in the program order.
Therefore, techniques for
:doc:`cachewait`
might lead to reduction of waiting time for calculation as a result, for example in case of a program where many calculations are chained after an array reference within a loop.
