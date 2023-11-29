.. _Section5:

Summary
=======

This document introduced a case of performance tuning of the commercial
CFD application software (Application), whose source code is large and
has complex structure.

The Application was too large and complex to be analyzed the entire
application with fapp (Fujitsu Advanced Performance Profiler). Therefore, the
execution time for each measurement region and the cost of the function
using fipp (Fujitsu Instant Performance Profiler) was measured at first to
narrow down functions or loops to be tuned. Then, based on the results
of fapp measurements of the narrowed functions or loops and the analysis
of the optimization messages during compilation, the tuning plan was
determined.

Another difficulty was that the proportion of the cost of most functions
in the Application was less than a few percent, so many functions needed
to be tuned for obtaining the target performance. In the tuning, the top
30 functions with that cost (sum of their cost was about 52% of the entire
Application) were analyzed and various types of tuning were performed to
these functions. Additionally, tuning to improve the load balance
between MPI processes of the Application and tuning of memory allocation
functions that are used by many other functions were also performed. In
fact, this increased tuning effort forced a review of tuning workplan,
including adding staffs.

As a result of these effort, the target performance was achieved by
improving performance rate of 58%, in other words, about 2.4 times
speedup (execution time was improved from 202.9 seconds to 85.0 seconds)
compared to the initial version.

