.. _Section1:

Introduction
============

Purpose of this document
------------------------

RIKEN has been operating the supercomputer Fugaku since March 2021. As
part of its work to support users of Fugaku, RIKEN has positioned the
development of documents from various perspectives for effective use of
Fugaku as an important mission. RIKEN has provided users with a wide
range of documents (e.g. Fugaku user's guide, program language manual,
user's guide for various tools, and programming guide for improving
performance.) that enable them to easily start using Fugaku and use
advanced technology depending on their level of proficiency.

As part of the document development of RIKEN, in this document, a case
of performance tuning of a commercial application software, which is
developed and released by an Independent Software Vendor (ISV), is
introduced. This case of tuning was conducted by Fujitsu Limited for the
A64FX processor, which is also used in Fugaku, in cooperation with an
ISV who developed the application software.

Commercial applications software, including the application software
described in this document, are typically more feature-rich than
open-source software, and their source codes are larger and more complex.
Therefore, it was believed that this case of tuning of the commercial
application software is useful for Fugaku users who want to tune a
practical program being large and complex, then an excerpt of key points
of the tuning is introduced.

Application software to be tuned
--------------------------------

The application software discussed in this document (hereafter referred to as Application) is a
commercial CFD application software for a general purpose thermal-fluid
simulation, which is used in a wide range of industries, such as
aerodynamic analysis around car bodies and thermal conduction analysis
of electronic equipment. The Application has many features, including
support for various fluid models, and like most commercial applications
software, its source code is large and has complex structure.

In recent years, there has been an increasing trend in the industry to
perform high-accuracy, large-scale simulations, such as high-definition
analyses of models with complex shapes. For the Application as well, to
perform such high-accuracy, large-scale simulations, users are
demanding that hundreds of thousands of parallel computing resources can
be utilized. Soon, it is expected that utilizing of larger-scale
computing resources will be demanded.

Therefore, the ISV who developed the Application has looked to Fugaku
having massive computing resources. To perform high-accuracy,
large-scale simulations with the Application on Fugaku, it was necessary
to (1) improve performance to execute simulations in a realistic time,
and (2) enable simulations with hundreds of thousands of computing
resources. To achieve these two goals and achieve a large-scale
simulation using Fugaku, performance tuning of the Application was
conducted in collaboration with the ISV.

Note that describing the details of this Application and the source
code, including function and/or variable names used in the Application,
is prohibited because the ISV's intellectual property rights may be
included. Therefore, the information described in this document,
including source code, has been modified or simplified for the purpose
of discussing the tuning.