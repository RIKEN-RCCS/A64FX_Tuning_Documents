配列ポインタへのcontiguous属性追加
----------------------------------

動機
^^^^

Fortran言語において、contiguous属性を指定した配列ポインタは、contiguousである指示先とのみポインタ結合することができます。
そのため、配列ポインタにcontiguous属性が指定された場合、ポインタ結合先が連続領域であることを前提として、富士通Fortranコンパイラは配列アクセスのオブジェクトコードを最適化します。

すなわち、配列ポインタにcontiguous属性を指定できる場合、配列アクセスが明示的に連続となり、
**プロセッサのキャッシュアクセス負荷が軽減**
されて、実行時間を短縮できる可能性があります。

適用例
^^^^^^

`STREAMベンチマーク <https://www.cs.virginia.edu/stream/FTP/Code/stream.f>`__
にもとづくコード例を用いて、性能改善の例を以下に示します。
この例では、割付け配列と結合する配列ポインタpa、pbおよびpcに対して、contiguous属性を付与しています。

.. code-block:: fortran
   :caption: 改善前

   TYPE dtype
     REAL(KIND=8), DIMENSION(:), ALLOCATABLE :: a, b, c
   END TYPE dtype

.. literalinclude:: ../triadt.case0.F90
   :language: fortran
   :lines: 5,7-16

.. literalinclude:: ../triadt.case1.F90
   :language: fortran
   :lines: 5,7-16
   :caption: 改善後
   :emphasize-lines: 2

改善前および改善後コードのサイクルアカウンティング測定結果を下記グラフに示します。
なお性能測定条件は、L2キャッシュでのブロッキングを想定し以下としました。

  n = 196608

改善前(左のグラフ)に対して改善後(右のグラフ)の測定結果では、L1Dキャッシュビジー時間が半減し、L2キャッシュアクセス待ち時間が支配的になり、実行時間が44%減ったことが分かります。

.. image:: ../triadt.29503716.0.png
   :width: 49%

.. image:: ../triadt.29503716.1.png
   :width: 49%

実例
^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
にて、この種の事例が以下のとおり紹介されています。

* `Optimization of GENESIS on Fugaku <https://www.hpci-office.jp/documents/meeting_A64FX/201223/20201223_Kobayashi_Tuning.pdf#page=14>`__

参考資料
^^^^^^^^

* `Fortran文法書 "2.88 CONTIGUOUS文" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/manuals/tcsds-1.2.37/lang/Fortran/j2ul-2557-01z0.pdf#page=168>`__
* `プログラミングガイド Fortran編 "contiguous属性" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Fortran_Programming_Guide_JA.pdf#page=147>`__
* `プログラミングガイド Fortran編 "pointerの性能チューニング" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Fortran_Programming_Guide_JA.pdf#page=162>`__
* `プログラミングガイド チューニング編 "ポインタ変数が含まれるループ(contiguous属性指示)" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Tuning_Programming_Guide_JA.pdf#page=176>`__
* `アプリケーションのタイプ別CPU性能チューニング "5.4.7 コンパイラ最適化の補完 -ポインタ配列のcontiguous属性付加-" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/app-tuning-pattern-Nihongo.pdf#page=60>`__

注意: 上記ドキュメントの参照には
`スーパーコンピュータ「富岳」利用者ポータル <https://www.fugaku.r-ccs.riken.jp/>`__
のアクセス権が必要です。
