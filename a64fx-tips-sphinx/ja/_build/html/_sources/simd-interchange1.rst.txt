データ依存最内ループのループ交換
--------------------------------

動機
^^^^

SIMD化されたループでは、異なるイタレーションの演算が同時に実行されます。
そのため、ループのイタレーション間でデータの依存関係がある場合、ソースプログラムどおりの演算結果を保証するために、そのループをSIMD化することはできません。

.. code-block:: fortran
   :caption: イタレーション間でデータの依存関係がないループ

   DO i = 1, n
     x(i) = x(i) + 1
   END DO

.. code-block:: fortran
   :caption: イタレーション間でデータの依存関係があるループ
   :emphasize-lines: 2

   DO i = 1, n
     x(i) = x(i-1) + 1
   END DO

ここで、最内ループのイタレーション間でデータの依存関係があるものの、外側ループのイタレーション間では依存関係がない場合、これらのループをループ交換することによって、
**交換前の外側ループをSIMD化**
することができます。

その結果、ループの異なるイタレーションの演算が同時に実行されて、実行時間を短縮できる可能性があります。

適用例
^^^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
で示されたコード例を用いて、性能改善の例を以下に示します。
この例では、配列R12pls、E12mns、R12mnsおよびE12plsの代入/参照でデータ依存のあるdo変数kのループを、do変数ichおよびicloudのループとループ交換しています。

.. code-block:: fortran
   :caption: 改善前

     do ich = 1, chmax
        do icloud = 1, 2
           ic = (ich - 1) * MSTRN_ncloud + icloud
           ... 
           R(rd_kmax+1) = 0
           T(rd_kmax+1) = 0
           do k = rd_kmax, 1, -1
              R(k) = (cf(k)) * R0(k,I_Cloud,ich) &
                   + (1.0_RP - cf(k)) * R0(k,I_ClearSky,ich)
              T(k) = (cf(k)) * T0(k,I_Cloud,ich) &
                   + (1.0_RP - cf(k)) * T0(k,I_ClearSky,ich)
              R12pls(k,ic) = R(k) + T(k) / (1.0_RP - R12pls(k+1,ic) * R(k)) &
                   * (R12pls(k+1,ic) * T(k))
              E12mns(k,ic) = Em(k,ic) + T(k) / ( 1.0_RP - R12pls(k+1,ic) * R(k)) &
                   * (R12pls(k+1,ic) * Ep(k,ic) + E12mns(k+1,ic))
           end do
           do k = 2, rd_kmax+1
              R12mns(k,ic) = R(k) + T(k) / (1.0_RP - R12mns(k-1,ic) * R(k)) &
                   * (R12mns(k-1,ic) * T(k))
              E12pls(k,ic) = Ep(k,ic) + T(k) / (1.0_RP - R12mns(k-1,ic) * R(k)) &
                   * (R12mns(k-1,ic) * Em(k,ic) + E12pls(k-1,ic))
           end do
        end do
     end do

.. literalinclude:: ../twst.case1.F90
   :language: fortran
   :lines: 42-68
   :caption: 改善後
   :emphasize-lines: 14-15

改善前および改善後コードのSIMD命令率とサイクルアカウンティング測定結果を下記グラフに示します。
なお、性能測定条件は以下のとおりです。

  rd_kmax = 54、chmax = 5、MSTRN_ncloud = 2

改善前(上段のグラフ)に対して改善後(下段のグラフ)の測定結果では、SIMD命令率が0%から38%に改善し、実行時間が67%減ったことが分かります。

.. image:: ../twst.29503716.0.simd.png
   :width: 15%
   :align: left

.. image:: ../twst.29503716.0.png
   :width: 49%

.. image:: ../twst.29503716.1.simd.png
   :width: 15%
   :align: left

.. image:: ../twst.29503716.1.png
   :width: 49%

実例
^^^^

`A64FX向けチューニング技術検討会 <https://www.hpci-office.jp/en/events/symposia/meetings_A64FX>`__
にて、この種の事例が以下のとおり紹介されています。

* `A64FX Tuning - SCALE on Fugaku - <https://www.hpci-office.jp/documents/meeting_A64FX/201209/20201209_A64FX-tuning_yamaura.pdf#page=9>`__
