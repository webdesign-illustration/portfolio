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

$(document).on('ready', function() {
  $(".full-screen").slick({
    centerMode: true,
    centerPadding: '5%',
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    infinite: true,
	  variableWidth: true,
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