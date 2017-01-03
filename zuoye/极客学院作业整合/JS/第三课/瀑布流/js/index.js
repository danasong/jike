$(document).ready(function(){
     $(window).on("load",function(){
          waterfallimg();
          var dataImg={"data":[{"src":"1.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"3.jpg"},{"src":"2.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"5.jpg"}]};
          window.onscroll=function(){
                if (rollimg()) {
                        $.each(dataImg.data, function(index, val) {
                             var box=$("<div>").addClass('box').appendTo($("#container"));
                             var  conternt=$("<div>").addClass('conternt').appendTo(box);         
                            $("<img>").attr('src', "./images/"+$(val).attr("src")).appendTo(conternt);
                              waterfallimg();
                        });
                };
          }
     });          
});
/*滚动监听判断是否加载数据*/
function  rollimg(){
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight=$(document).height();
    var scrollHeight=$(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}
/*实时监听浏览器宽度自动更新布局*/
/*$(function(){setTimeout(onWidthChange,1000);});
 
function onWidthChange()
{
    if( $(window).width() > 1200 ) {
        $("#container").load("index.htm #page",null,function(){console.log("加载成功")}); 
    }else{
        waterfallimg();
       console.log(2);
    }
    setTimeout(onWidthChange,1000);
}*/
/*瀑布流布局*/
function waterfallimg(){
    var box =$(".box");
    var boxWidth=box.eq(0).width();
    var windowWidth=$(window).width();
    var num=Math.floor(windowWidth / boxWidth);
    var boxArr=[];
    box.each(function(index, val) {
           var boxHeight=box.eq(index).height();
           if (index<num){
                boxArr[index]=boxHeight;
               //console.log(boxHeight);
           }else{
                var minboxHeight=Math.min.apply(null,boxArr);
                //console.log(minboxHeight);
                var minboxIndex= $.inArray(minboxHeight, boxArr);
              //console.log(minboxIndex);\
/*图片容器居中*/
               var containerWidth=boxWidth*num;
               var leftWidth=Math.floor(windowWidth-containerWidth)/2;
                $("#container").css("left",leftWidth);
                $(val).css({
                    "position":"absolute",
                    "top":minboxHeight,
                    "left":box.eq(minboxIndex).position().left
                });
                boxArr[minboxIndex]+=box.eq(index).height();
           }
    });
}