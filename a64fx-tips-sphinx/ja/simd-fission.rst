不完全入れ子ループのループ分割
------------------------------

動機
^^^^

富士通Fortran/C/C++コンパイラは最内ループをSIMD化します。
そのため、完全入れ子のループではない場合、すなわち多重ループにおいて最内ループより外側に実行文がある場合、最内ループ以外の演算はSIMD化されず、逐次的に実行されます。

.. code-block:: fortran
   :caption: 完全入れ子ループ

   DO j = 1, n
     DO i = 1, n
       y(j) = y(j) + a(i,j) * x(i)
     END DO
   END DO

.. code-block:: fortran
   :caption: 不完全入れ子ループ
   :emphasize-lines: 5

   DO j = 1, n
     DO i = 1, n
       y(j) = y(j) + a(i,j) * x(i)
     END DO
     y(j) = y(j) / a(j,j)
   END DO

ここで、最内ループ以外の演算の量が無視できない割合の場合、不完全入れ子ループをループ分割し複数の完全入れ子ループとすることによって、
**SIMD化される演算の割合を向上**
できるケースがあります。

.. code-block:: fortran
   :caption: ループ分割後
   :emphasize-lines: 5-6

   DO j = 1, n
     DO i = 1, n
       y(j) = y(j) + a(i,j) * x(i)
     END DO
   END DO
   DO j = 1, n
     y(j) = y(j) / a(j,j)
   END DO

その結果、より多くの演算が同時に実行されて、実行時間を短縮できる可能性があります。

適用例
^^^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で示されたコード例を用いて、性能改善の例を以下に示します。
この例では、不完全入れ子である変数iのforループを、変数mのforループを含む部分とその他の部分にループ分割しています。

.. literalinclude:: ../axhelm2.case0.c
   :language: c
   :lines: 8-32
   :caption: 改善前

.. literalinclude:: ../axhelm2.case1.c
   :language: c
   :lines: 8-39
   :caption: 改善後
   :emphasize-lines: 16,18

改善前および改善後コードのSIMD命令率とサイクルアカウンティング測定結果を下記グラフに示します。
なお、性能測定条件は以下のとおりです。

  p_Nq = 8

改善前(上段のグラフ)に対して改善後(下段のグラフ)の測定結果では、SIMD命令率が53%から76%に改善し、実行時間が16%減ったことが分かります。

.. image:: ../axhelm2.29503716.0.simd.png
   :width: 15%
   :align: left

.. image:: ../axhelm2.29503716.0.png
   :width: 49%

.. image:: ../axhelm2.29503716.1.simd.png
   :width: 15%
   :align: left

.. image:: ../axhelm2.29503716.1.png
   :width: 49%

実例
^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
にて、この種の事例が以下のとおり紹介されています。

* `Performance tuning and analysis for the axhelm kernel in NeK5000/RS CFD codes <https://www.hpci-office.jp/documents/meeting_A64FX/220428/20220428_Performance_Tuning_on_Fugaku-tj-rev0.pdf#page=16>`__

参考資料
^^^^^^^^

* `axhelmカーネルのチューニング 別解(tune-1a) <https://riken-rccs.github.io/A64FX_Tuning_Documents/axhelm/ja/build/html/tune-1a.html>`__
