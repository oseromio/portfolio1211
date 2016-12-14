$(function(){


$('.top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });

  // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop': position
    }, 500)
  })

});
