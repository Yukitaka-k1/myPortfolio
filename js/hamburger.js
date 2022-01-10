$(document).ready(function(){
    $("#nav-button").on("click", function(){
        $(".sp-nav").slideToggle();
    });
});

$(document).ready(function(){
    $("#sp-nav-list a").on("click", function(){
        $(".sp-nav").slideToggle();
    });
});

$(function () {
    var headerHight = 100; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
           var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");
           return false;
      });
   });