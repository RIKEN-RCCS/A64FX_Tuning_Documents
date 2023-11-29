AoS型多次元配列の次元入れ替え
-----------------------------

動機
^^^^

Array of Structures (AoS)は例えば以下のように、構造体(C言語の場合)を並べて配列の形にしたデータレイアウトです。

.. code-block:: c
   :caption: AoS配列の宣言(C言語の場合)

   struct Particle {double x; double y; double z;};
   struct Particle particles[N];

.. figure:: ../cachewait-aos.png
   :scale: 20%

   AoS配列のメモリ格納順序

このデータ構造は多次元配列を用いて以下のようにも表現できます。

.. code-block:: fortran
   :caption: AoS型2次元配列の宣言(Fortran言語の場合)

   real, dimension(3,N) :: particles_aos

.. figure:: ../cachewait-2d-aos.png
   :scale: 20%

   AoS型2次元配列のメモリ格納順序

ところで、この例でNが3よりも十分大きい場合、大きさNの次元に対応するループをSIMD化するほうがコンパイラによる最適化が促進され、実行性能面で有利と期待されます。
しかしこの多次元配列は大きさNの次元が1次元目(Fortran言語の場合)でないため、
:doc:`先の例 <cachewait-unroll>`
と同様に配列アクセスが非連続的になり、プロセッサのキャッシュアクセス負荷が高くなります。

そこで、この多次元配列の1次元目と2次元目を入れ替え、以下のようなStructure of Arrays (SoA)のデータレイアウトとすることによって、大きさNの次元に対応するループを
**SIMD化した場合のキャッシュアクセス負荷を軽減**
できます。

.. code-block:: fortran
   :caption: SoA型2次元配列の宣言(Fortran言語の場合)

   real, dimension(N,3) :: particles_soa

.. figure:: ../cachewait-2d-soa.png
   :scale: 20%

   SoA型2次元配列のメモリ格納順序

その結果、プロセッサのキャッシュアクセス負荷を抑えつつ、コンパイラによる最適化を促進させて、実行時間を短縮できる可能性があります。

適用例
^^^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で示されたコード例を用いて、性能改善の例を以下に示します。
この例では、一時配列x、y、zおよびmを導入し、変数jのforループにおいてAoS型配列bodyに対する非連続的なアクセスを一時配列に対する連続的なアクセスに置き換えています。

.. literalinclude:: ../nbody.case0.cpp
   :language: c++
   :lines: 6-25
   :caption: 改善前

.. literalinclude:: ../nbody.case2.cpp
   :language: c++
   :lines: 6-33
   :caption: 改善後
   :emphasize-lines: 1,3-8,13-15,20

改善前および改善後コードのサイクルアカウンティング測定結果を下記グラフに示します。
なお、性能測定条件は以下のとおりです。

  n = 2048

改善前(左のグラフ)に対して改善後(右のグラフ)の測定結果では、L1Dキャッシュビジー時間が大幅減少し、実行時間が34%減ったことが分かります。
なおこの例では、配列アクセスの結果に依存し連鎖する演算が多く含まれるために、キャッシュアクセス待ち時間よりも浮動小数点演算待ち時間が顕在化していると考えられます。

.. image:: ../nbody.29503716.0.png
   :width: 49%

.. image:: ../nbody.29503716.2.png
   :width: 49%

実例
^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
にて、この種の事例が以下のとおり紹介されています。

* `Optimization of GENESIS on Fugaku <https://www.hpci-office.jp/documents/meeting_A64FX/201223/20201223_Kobayashi_Tuning.pdf#page=12>`__
* `Performance tuning of N-body kernel for A64FX processor <https://www.hpci-office.jp/documents/meeting_A64FX/220428/rist-a64fx-nbody.pdf#page=15>`__

参考資料
^^^^^^^^

* `プログラミングガイド チューニング編 "Multiple Structures命令の適用条件" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Tuning_Programming_Guide_JA.pdf#page=244>`__

注意: 上記ドキュメントの参照には
`スーパーコンピュータ「富岳」利用者ポータル <https://www.fugaku.r-ccs.riken.jp/>`__
のアクセス権が必要です。
