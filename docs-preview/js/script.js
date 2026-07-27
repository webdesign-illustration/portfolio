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


$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(document).ready(function () {
    // ページ読み込み時にトップへスムーズスクロール
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(function(){
    const pageTop = $('.pagetop');
	pageTop.hide();
	pageTop.click(function(){
		$('body,html').animate({
            scrollTop: 0
        }, 500);
		return false;
	});
});

$(window).on('load scroll', function(){
	if ($(this).scrollTop() > 100) {
		$('.pagetop').fadeIn();
	} else {
		$('.pagetop').fadeOut();
	}
});

const container = document.querySelector('.animation-container');
const fragmentsContainer = document.getElementById('fragments');
const finalText = document.querySelector('.final-text');

const fragmentCount = 80; // 断片の数

for (let i = 0; i < fragmentCount; i++) {
  const fragment = document.createElement('div');
  fragment.classList.add('fragment');

  // ランダムな初期位置
  fragment.style.left = Math.random() * 100 + '%';
  fragment.style.top = Math.random() * 100 + '%';

  fragmentsContainer.appendChild(fragment);

  // アニメーション開始
  setTimeout(() => {
    fragment.style.transition = 'all 2s ease-out';
    fragment.style.left = '50%';
    fragment.style.top = '50%';
    fragment.style.opacity = '0';
  }, 100);
}

// 最後に文字をフェードイン
setTimeout(() => {
  finalText.style.opacity = 1;
}, 2500);

