少回転最内ループのループストライピング
--------------------------------------

動機
^^^^

富士通Fortran/C/C++コンパイラはA64FXプロセッサの性能を引き出すために、ソフトウェアパイプライニングの最適化を活用します。
ただしソフトウェアパイプライニングでは、ループの異なる複数イタレーションの演算を重ねて実行するため、対象ループの繰り返し数が少ない場合、最適化の効果が発揮されない場合があります。

そこで、ソースプログラムにstripingの最適化制御行(OCL)を挿入することによって、以下に示すような
**ループストライピングの最適化をコンパイラに指示**
できるケースがあります。

.. code-block:: fortran
   :caption: ソースプログラム

   DO i = 1, n
     a(i) = b(i) + c(i)
   END DO

.. code-block:: fortran
   :caption: ループストライピング適用後の疑似コード
   :emphasize-lines: 1

   DO i = 1, n, 2
     tmp_b1 = b(i)
     tmp_b2 = b(i+1)
     tmp_c1 = c(i)
     tmp_c2 = c(i+1)
     tmp_a1 = tmp_b1 + bmp_c1
     tmp_a2 = tmp_b2 + tmp_c2
     a(i) = tmp_a1
     a(i+1) = tmp_a2
   END DO

その結果、ループの繰り返し数が少ない場合でも、異なるイタレーションの演算が重ねて実行されて、実行時間を短縮できる可能性があります。

適用例
^^^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で示されたコード例を用いて、性能改善の例を以下に示します。
この例では、繰り返し数が比較的少ない変数jjのforループに対して、stripingの最適化制御行を適用しています。

.. literalinclude:: ../pairljcutintel.case0.cpp
   :language: c++
   :lines: 60-120
   :caption: 改善前

.. code-block:: c++
   :caption: 改善後
   :emphasize-lines: 2

   #pragma loop norecurrence
   #pragma loop striping 2
       for (int jj = 0; jj < jnum; jj++) {
         ...
       }

改善前および改善後コードのサイクルアカウンティング測定結果を下記グラフに示します。
なお、性能測定条件は以下のとおりです。

  ONETYPE =1、EFLAG = 0、NEWTON_PAIR = 1、jnum = 26～49 (平均37.5)

改善前(左のグラフ)に対して改善後(右のグラフ)の測定結果では、浮動小数点演算待ち時間やL1Dキャッシュアクセス待ち時間が減少し、実行時間が27%減ったことが分かります。
なおこの例では、非連続的な配列アクセスが多く含まれるために、L1Dキャッシュアクセス待ち時間も削減されたと考えられます。

.. image:: ../pairljcutintel.29503716.0.png
   :width: 49%

.. image:: ../pairljcutintel.29503716.1.png
   :width: 49%

実例
^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
にて、この種の事例が以下のとおり紹介されています。

* `Performance tuning on LAMMPS for A64FX system <https://www.hpci-office.jp/documents/meeting_A64FX/210427/lmp_tune_for_a64fx_27Apr2021_final.pdf#page=12>`__
* `Porting and optimizing GROMACS on Fugaku <https://www.hpci-office.jp/documents/meeting_A64FX/220727/GROMACS_A64fx.pdf#page=17>`__

参考資料
^^^^^^^^

* `Fortran使用手引書 "9.1.2.4 ループストライピング" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/manuals/tcsds-1.2.37/lang/Fortran/j2ul-2558-01z0.pdf#page=264>`__
* `C言語使用手引書 "3.3.4 ループストライピング" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/manuals/tcsds-1.2.37/lang/C/j2ul-2560-01z0.pdf#page=73>`__
* `C++言語使用手引書 "3.3.4 ループストライピング" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/manuals/tcsds-1.2.37/lang/C++/j2ul-2561-01z0.pdf#page=76>`__
* `プログラミングガイド プログラミング共通編 "ループ最適化と命令スケジューリング" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Programming_common_part_Programming_Guide_JA.pdf#page=122>`__
* `プログラミングガイド Fortran編 "ループ展開" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Fortran_Programming_Guide_JA.pdf#page=44>`__
* `プログラミングガイド Fortran編 "STRIPING" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Fortran_Programming_Guide_JA.pdf#page=52>`__
* `プログラミングガイド チューニング編 "ストライピング(インターリーブ)展開数の指定およびソフトウェアパイプライニングの抑止" <https://www.fugaku.r-ccs.riken.jp/doc_root/ja/programming_guides/Tuning_Programming_Guide_JA.pdf#page=194>`__

注意: 上記ドキュメントの参照には
`スーパーコンピュータ「富岳」利用者ポータル <https://www.fugaku.r-ccs.riken.jp/>`__
のアクセス権が必要です。
