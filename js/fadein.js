//スクロールをしたら1度だけアニメーションをする設定
$('.fade').on('inview', function(event, isInView) {
    if (isInView) {
        //in
        $(this).stop().addClass('animate__animated animate__fadeIn');
    } else {
        //out
        $(this).stop().removeClass('animate__animated animate__fadeIn')
    }
});

$('.fadeUpText').on('inview', function(event, isInView) {
    if (isInView) {
        //in
        $(this).stop().addClass('animate__animated animate__fadeInUp');
    } else {
        //out
        $(this).stop().removeClass('animate__animated animate__fadeInUp')
    }
});

$('.fadeUpText-once').on('inview', function(event, isInView) {
    if (isInView) {
        //in
        $(this).stop().addClass('animate__animated animate__fadeInUp');
    } else {
    }
});

$('.fadeUpBox').on('inview', function(event, isInView) {
    if (isInView) {
        //in
        $(this).stop().addClass('animate__animated animate__fadeInUp animate__slower');
    } else {
        //out
        $(this).stop().removeClass('animate__animated animate__fadeInUp')
    }
});

$('.fadeUpBox-once').on('inview', function(event, isInView) {
    if (isInView) {
        //in
        $(this).stop().addClass('animate__animated animate__fadeInUp animate__slower');
    } else {
    }
});
//all rights by  https://coco-factory.jp/ugokuweb/animatecss/
