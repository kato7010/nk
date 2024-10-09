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

// // 高さを揃える要素
// const target = document.querySelectorAll('work__item-image');
// // 空の配列を指定
// const heightlist = [];
// // 要素の高さを全て配列に格納
// target.forEach(element => {
//     const height = element.clientHeight;
//     heightlist.push(height);
// });
// // 一番高さがある要素のheightを取得
// const maxHeight = Math.max.apply(null,heightlist);
// // 要素にstyle属性を付与。一番高さのある要素のheightを揃える要素全てに指定
// target.forEach(element => {
//     element.style.height = maxHeight + 'px';
// });




// // worksコンテンツの写真や説明文の要素の高さを合わせるための設定
// var maxHeight = 0;
// $('.work__item').each(function(){
//     // 変数に入っている高さを上回ったら上書きする
//     if ($(this).height() > maxHeight){
//         maxHeight = $(this).height();
//     }
// });

// // 変数の数値を反映させる
// $('.work__item').height(maxHeight);