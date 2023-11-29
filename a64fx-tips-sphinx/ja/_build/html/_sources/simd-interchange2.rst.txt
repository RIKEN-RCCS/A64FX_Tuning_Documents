少回転最内ループのループ交換
----------------------------

動機
^^^^

富士通Fortran/C/C++コンパイラはA64FXプロセッサのプレディケートレジスタを用いることにより、任意の繰り返し数のループをSIMD化します。
ただし、ループ繰り返し数が少なく、かつSIMD幅の倍数ではない場合、プレディケートレジスタによって無効化される演算の量は無視できない割合になります。

ここで、最内ループの繰り返し数が少ないものの、外側ループの繰り返し数が相対的に多い場合、これらのループをループ交換することによって、
**プレディケートレジスタによって無効化される演算の割合を抑制**
できるケースがあります。

その結果、無駄な演算が削減されて、実行時間を短縮できる可能性があります。

適用例
^^^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で示されたコード例を用いて、性能改善の例を以下に示します。
この例では、ループ繰り返し数が少ないdo変数ichのループを、do変数kのループとループ交換しています。

.. literalinclude:: ../dtrn3.case1.F90
   :language: fortran
   :lines: 16-29
   :caption: 改善前

.. literalinclude:: ../dtrn3.case2.F90
   :language: fortran
   :lines: 17-30
   :caption: 改善後
   :emphasize-lines: 1-2

改善前および改善後コードのSIMD命令率とサイクルアカウンティング測定結果を下記グラフに示します。
なお、性能測定条件は以下のとおりです。

  rd_kmax = 54、chmax = 5

改善前(上段のグラフ)に対して改善後(下段のグラフ)の測定結果では、実行時間が51%減ったことが分かります。
このとき浮動小数点演算命令実行数は35%減少し、浮動小数点演算パイプライン有効要素率は68%から86%に向上していました。

.. image:: ../dtrn3.29503716.1.simd.png
   :width: 15%
   :align: left

.. image:: ../dtrn3.29503716.1.png
   :width: 49%

.. image:: ../dtrn3.29503716.2.simd.png
   :width: 15%
   :align: left

.. image:: ../dtrn3.29503716.2.png
   :width: 49%

実例
^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
にて、この種の事例が以下のとおり紹介されています。

* `A64FX Tuning - SCALE on Fugaku - <https://www.hpci-office.jp/documents/meeting_A64FX/201209/20201209_A64FX-tuning_yamaura.pdf#page=13>`__
