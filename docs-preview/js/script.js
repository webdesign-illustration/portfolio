$(function() {
	$('#menu-btn').click(function() {
    	$('#menu-show').fadeIn();
    });

	$('#close-modal').click(function() {
    	$('#menu-show').fadeOut();
   });
	
 $('.lesson').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
 });

	
 $(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
  $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
      $(this).addClass('active');              /* 「active」のクラスを付与 */
    }
  });
});


// KSDesign の演出
$(function() {
    setTimeout(function(){
        $('.start p').fadeIn(1600);
    },500);

    setTimeout(function(){
        $('.start').fadeOut(500);
    },2500);
});

// fragment のアニメーションを KSDesign の演出後に開始
setTimeout(() => {

  const container = document.querySelector('.animation-container');
  const fragmentsContainer = document.getElementById('fragments');
  const finalText = document.querySelector('.final-text');

  const fragmentCount = 80;

 const fragmentCount = 80;
const fragments = []; // ← 追加：fragment を全部ここに入れる

for (let i = 0; i < fragmentCount; i++) {
  const fragment = document.createElement('div');
  fragment.classList.add('fragment');

  fragment.style.left = Math.random() * 100 + '%';
  fragment.style.top = Math.random() * 100 + '%';

  // ここで transition を設定（重要）
  fragment.style.transition = 'all 2s ease-out';

  fragmentsContainer.appendChild(fragment);

  fragments.push(fragment); // ← 追加：配列に入れる
}

// まとめて消す（最後に残らない）
setTimeout(() => {
  fragments.forEach(fragment => {
    fragment.style.left = '50%';
    fragment.style.top = '50%';
    fragment.style.opacity = '0';
  });
}, 100); // KSDesign の演出後に動かすならここを 2500 にする
