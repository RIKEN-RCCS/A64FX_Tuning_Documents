まとめ
======

本ドキュメントでは、
`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で発表されたチューニング事例をもとに、他のアプリケーションプログラムにも共通して応用可能な施策を説明しました。
これらの施策は、対象ループにおいて、例えば以下のような速度向上が得られるものです。

.. list-table::
   :header-rows: 1

   * - 目的
     - 施策
     - 対象ループの速度向上率
   * - :doc:`simd`
     - :doc:`simd-interchange1`
     - 3.04倍
   * -
     - :doc:`simd-interchange2`
     - 2.02倍
   * -
     - :doc:`simd-fission`
     - 1.19倍
   * - :doc:`calcwait`
     - :doc:`calcwait-fission`
     - 1.78倍
   * -
     - :doc:`calcwait-striping`
     - 1.37倍
   * - :doc:`cachewait`
     - :doc:`cachewait-unroll`
     - 3.35倍
   * -
     - :doc:`cachewait-soa`
     - 1.51倍
   * -
     - :doc:`cachewait-contiguous`
     - 1.79倍

アプリケーションプログラムの速度向上を検討されている読者には、CPU性能解析レポートなどの性能プロファイラの結果を参考としつつ、これらの施策の中から適用可能なものの有無を確認することをお勧めします。
