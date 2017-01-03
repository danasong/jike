$(document).ready(function(){
    var newslist='推荐'
    $(".content-div ul li").children('a').eq(0).addClass('lineli');
    news_add(newslist);
})
$(".content-div ul li").click(function(e) {
   $(".content-div ul li").children('a').removeClass('lineli');
   $(this).children('a').addClass('lineli');
   newslist=$(this).children('a').html();
   news_add(newslist);
});

function news_add(n){
     var $lists=$("article .news_man .news_lists");
     $lists.empty();
     $.ajax({
              url: 'server/selectnews.php',
              type: 'post',
              data:{newslist:n},
              dataType: 'json',
             beforeSend:function(XMLHttpRequest){
                $(".news_lists").html("<img  id='loginin' style='margin-left:35px;' src='images/jiazaizhong.gif' />"); 
              }, 
              success:function(data){
                alert("加载中");
                $("#loginin").remove();
                data.forEach(function(item,index,array) {
                    var $list=$("<li>").addClass("news_list").prependTo($lists);
                    var $newsimg=$("<div>").addClass("newsimg").appendTo($list);
                    var $list=$("<li>").addClass('news_list').prependTo($lists);
                    var $newsimg=$("<div>").addClass('newsimg').appendTo($list);
                    var $img=$("<img>").attr('src', item.newsimg).appendTo($newsimg);
                    var $newscontent=$("<div>").addClass('news_content').appendTo($list);
                    var $h1=$("<h1>").html(item.newstext).appendTo($newscontent);
                    var $p=$("<p>").appendTo($newscontent);
                    var $span1=$("<span>").html(item.newsdate).appendTo($p);
                    var $span2=$("<span>").html(item.newssource).appendTo($p);
                })      
              }
      })

     
}