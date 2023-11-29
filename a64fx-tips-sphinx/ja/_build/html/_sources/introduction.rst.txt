はじめに
========

本ドキュメントの位置付け
^^^^^^^^^^^^^^^^^^^^^^^^

本ドキュメントは
`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で発表されたチューニング事例をもとに、他のアプリケーションプログラムにも共通して応用可能な施策を整理しまとめたものです。
これらの施策は、以下に挙げる実用的なアプリケーションプログラムでの事例から抽出された実際的なものです。

.. list-table::
   :header-rows: 1

   * - アプリケーション分野
     - プログラム名
   * - 電磁気
     - `WumingPIC2D <https://github.com/WumingCode/WumingPIC2D>`__
   * - 流体力学
     - `FFVHC-ACE <https://www.klab.mech.tohoku.ac.jp/fugaku/>`__
   * -
     - `FrontFlow/X <https://www.jstage.jst.go.jp/article/seisankenkyu/70/1/70_43/_article>`__
   * -
     - `Nek5000/RS <https://github.com/Nek5000>`__
   * - 分子動力学
     - `GENESIS <https://www.r-ccs.riken.jp/labs/cbrt/>`__
   * -
     - `GROMACS <https://www.gromacs.org/>`__
   * -
     - `LAMMPS <https://www.lammps.org/>`__
   * - 量子色力学
     - `LQCD <https://github.com/RIKEN-LQCD/qws>`__
   * - 気象、気候
     - `SCALE <https://scale.riken.jp/>`__

なお施策の整理にあたっては、効果すなわち目的の観点も持ち込み、CPU性能解析レポートなどの性能プロファイラの結果から施策の候補を見出せるよう配慮しました。

本ドキュメントの構成
^^^^^^^^^^^^^^^^^^^^

本ドキュメントで説明する8つの施策は、特に注力すべき以下の3種類の目的で分類されています。

#. :doc:`simd`
#. :doc:`calcwait`
#. :doc:`cachewait`

各施策の説明は、以下の内容で構成されています。

* 施策のより具体的な動機
* 性能改善の効果を示す適用例
* A64FXチューニング技術検討会で発表された実例への参照リンク
* 言語製品マニュアルやプログラミングガイド等の関連情報への参照リンク

性能プロファイラの結果が既に手元にある読者には、上記目的の中から対象アプリケーションプログラムに適合しそうなものに注目し、適用可能な施策の有無を確認することをお勧めします。

なお各施策の説明では、A64FXチューニング技術検討会の講演資料やプログラミングガイド チューニング編などの関連情報への参照リンクも示されているため、必要に応じてより深い理解に繋げていただくことも可能です。

性能測定環境
^^^^^^^^^^^^

本ドキュメントに掲載した性能データの測定環境は以下のとおりです。
なおC/C++コンパイラはtradモードを使用しましたが、本ドキュメントで説明する施策の考え方はclangモードにも応用可能です。

.. list-table::
   :stub-columns: 1

   * - 測定時期
     - 2023年11月
   * - 使用マシン
     - スーパーコンピュータ「富岳」
   * - 言語環境バージョンレベル
     - 富士通Fortran/C/C++コンパイラ 4.9.0 (tcsds-1.2.37)
   * - 翻訳時最適化オプション
     - -Kfast,openmp,ocl
   * - 実行時プロセス数/スレッド数
     - 4プロセス、12スレッド

また、各施策の説明で性能改善効果の確認に用いたCPU性能解析レポートの使用方法については、下記の言語製品マニュアル等を適宜参照してください。

* `プロファイラ使用手引書 "第4章 CPU性能解析レポート" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/manuals/tcsds-1.2.37/lang/Tool/j2ul-2568-01z0.pdf#page=79>`__
* `プログラミングガイド チューニング編 "ボトルネックの調査" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Tuning_Programming_Guide_JA.pdf#page=6>`__
* `プログラミングガイド プロセッサ編 "PMUイベント" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Processors_Programming_Guide_JA.pdf#page=46>`__
* `アプリケーションのタイプ別CPU性能チューニング "5.1 CPU性能解析レポートの見方" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/app-tuning-pattern-Nihongo.pdf#page=23>`__

注意: 上記ドキュメントの参照には
`スーパーコンピュータ「富岳」利用者ポータル <https://www.fugaku.r-ccs.riken.jp/>`__
のアクセス権が必要です。
