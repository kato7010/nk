"use strict";

//警告の表示
alert('このWebサイトは職業訓練の卒業制作で作成したサイトです。制作実績は、授業の一環で制作したものであり、公式サイトとはなんら関係はありません。');

//リンクをクリックした時に固定したヘッダーに要素が被らないようにする設定
jQuery(function ($) {
    //リンクをクリックしたときの挙動の指示出し
    $(document).on('click', 'a[href*="#"]', function () {
      //移動する時間（1秒）
      let time = 1000;
      //ヘッダーの高さ（innerHeightで高さを取得）
      let header = $('header').innerHeight();
      //クリックした要素の値（hash）を取得して変数として入れる
      let target = $(this.hash);
      if (!target.length) return;
      //ヘッダーの高さ分を差し引いた位置を取得し、その位置まで指定した時間で滑らかにスクロール
      let targetH = target.offset().top - header;
      $('html,body').animate({ scrollTop: targetH }, time, 'swing');
      return false;
    });
  });

