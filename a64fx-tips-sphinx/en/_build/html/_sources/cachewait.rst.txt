Reduction of Waiting Time for Cache Access
==========================================

When CPU performance analysis reports show higher ratio of waiting time for L1D cache access on cycle accounting, there might be room to reconsider data access pattern of the source program.
Effective techniques for such cases are explained in this section.

.. toctree::
   :maxdepth: 1

   cachewait-unroll
   cachewait-soa
   cachewait-contiguous

On cycle accounting, waiting time for calculation and cache access is distinguished for each CPU cycle by execution status of the oldest in-flight CPU instruction in the program order.
Therefore, techniques for
:doc:`calcwait`
might reduce waiting time for cache access together as a result, for example in case of a program where there are many non-contiguous array references within a loop.
