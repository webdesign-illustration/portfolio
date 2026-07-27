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

  const fragmentsContainer = document.getElementById('fragments');
  const finalText = document.querySelector('.final-text');

  const fragmentCount = 80;
  const fragments = [];

  // fragment を生成
  for (let i = 0; i < fragmentCount; i++) {
    const fragment = document.createElement('div');
    fragment.classList.add('fragment');

    fragment.style.left = Math.random() * 100 + '%';
    fragment.style.top = Math.random() * 100 + '%';

    fragmentsContainer.appendChild(fragment);
    fragments.push(fragment);
  }

  // fragment を中央に集めて消す
  fragments.forEach((fragment, index) => {
    const delay = Math.random() * 800; // 自然な遅延
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;

    setTimeout(() => {
      fragment.style.left = `calc(50% + ${offsetX}px)`;
      fragment.style.top = `calc(50% + ${offsetY}px)`;
      fragment.style.opacity = '0';
    }, delay);
  });

  // final-text をフェードイン
  setTimeout(() => {
    finalText.style.opacity = 1;
    finalText.style.transform = "scale(1)";
  }, 3000);

}, 2500);
