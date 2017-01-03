/*头部jquery*/
$(".head-div").children("ul").children("li").hover(
	function() {
		$(this).css("color","#2DB855");
		$(this).children("a").css("color","#2DB855");
		$(this).children(".arrow-icon").attr("class","arrow-icon rotate animation done ");
		$(this).children(".submenu").fadeIn("slow");
	},
	function () {
		$(this).css("color","#000");
		$(this).children("a").css("color","#000");
		$(this).children(".submenu").css("display","none");
		$(this).children(".arrow-icon").attr("class","arrow-icon");
  }
);
$("#search-btn").hover(
	function(){
		$(this).attr("class","search-icon seek-hover");
	},
	function(){
		$(this).attr("class","search-icon");
	}
);
$(".app-icon").hover(
	function(){
		$(this).attr("class","app-icon relative app-hover");
		$("#app-div-submenu").fadeIn("slow");
	},function(){
		$(this).attr("class","app-icon relative");
		$("#app-div-submenu").hide();
});
$(".logged").hover(
	function () {
		$(".submenus").fadeIn("slow");
	},function(){
		$(".submenus").hide();
	}
);
$(".submenus").children("dd").hover(
	function(){
		$(this).children("a").css("color","#37B559");
	},function(){
		$(this).children("a").css("color","#666");
	}
);
/*课程库jquery*/
$(".aside-cList").children("li").hover(
	function(){
		$(this).children("[name=course-div]").attr("class","course-div right-course");
		$(this).children("[name=course-div]").children("a").attr("class","right-a");
		$(this).children("[name=course-div]").children(".list-show").show();
	},function(){
		$(this).children("[name=course-div]").attr("class","course-div");
		$(this).children("[name=course-div]").children("a").attr("class","");
		$(".list-show").hide();
	}
);
$(".hdlist").children("li").hover(
	function(){
		$(this).children("a").attr("class","all-li-a");
	},function(){
		$(this).children("a").attr("class","");
	}
);
/*冒泡and终断冒泡*/
$(".lesson-list-div").children("ul").children(".samyak").hover(
	function(){
		$(this).children(".lesson-box").children(".user-action").css("opacity","1");
		$(this).children(".lesson-box").children("a").children(".lessonplay").css("opacity","1");
		$(this).children(".lesson-box").children("a").children(".lessonplay").css("height","135px");
		$(this).children(".lesson-box").children("a").children(".lessonplay").css("display","block");
		$(this).children(".lesson-infor").stop().animate({height:'+175px'},"slow");
	},function(){
		$(this).children(".lesson-box").children(".user-action").css("opacity","0");
		$(this).children(".lesson-box").children("a").children(".lessonplay").css("opacity","0");
		$(this).children(".lesson-box").children("a").children(".lessonplay").css("display","none");
		$(this).children(".lesson-infor").stop().animate({height:'+88px'},"slow");
	}
);

$(".sortMode").children("dl").hover(
	function(){
		$(this).children("dd").css("opacity","1");
		$(this).css("border","1px solid #EFECEC");
		$(this).children("dd").css("display","block");
	},function(){
		$(this).children("dd").css("opacity","0");
		$(this).css("border","")
		$(this).children("dd").css("display","none");
	}
);
$(".sortMode").children("dl").children("dd").children("p").hover(
	function(){
		$(this).children("a").css("color","#35B558");
	},function(){
		$(this).children("a").css("color","");
	}
);
$(".list-icon ").click(
	function(){
		$(".lesson-list-div").children("ul").children("li").attr("class","samyak-charitra");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-box").attr("class","lesson-box-sam");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor").attr("class","lesson-infor-sam");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor-sam").children("h2").attr("class","lesson-infor-h2-sam");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor-sam").children("p").attr("class","lesson-infor-p-sam");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor-sam").children(".timeandicon").attr("class","timeandicon-sam");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor-sam").children(".timeandicon-sam").children("div").children(".lessonicon-box").css("top","-75px");
		$(".df").children("dl").children("dd").attr("class","lessonicon-dd-sam");
		$(".lessonimg").css("height","100px");
		/*一行排列动画*/
		$(".lesson-list-div").children(".cf").children(".samyak-charitra").children(".lesson-box-sam").hover(
			function() {
			$(this).children("a").children(".lessonplay").css('height', '100px');
			$(this).children("a").children(".lessonplay").css('opacity', '1');
			$(this).children("a").children(".lessonplay").show();
		}, function() {
			$(this).children("a").children(".lessonplay").css('height', '135px');
			$(this).children("a").children(".lessonplay").css('opacity', '0');
			$(this).children("a").children(".lessonplay").hide();
		});
	}
);
$(".kuai-icon").click(function() {
		$(".lesson-list-div").children("ul").children("li").attr("class","");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-box-sam").attr("class","lesson-box");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor-sam").attr("class","lesson-infor");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor").children("h2").attr("class","lesson-infor-h2");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor").children("p").attr("class","");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor").children(".timeandicon-sam").attr("class","timeandicon");
		$(".lesson-list-div").children("ul").children("li").children(".lesson-infor").children(".timeandicon").children("div").children(".lessonicon-box").css("top","");
		$(".df").children("dl").children("dd").attr("class","zhongji");
		$(".lessonimg").css("height","135px");
});
/*滚动事件*/
$(document).ready(function(){
    $(document).scroll(function(){
        var top = $(document).scrollTop();
        if(top <1)
           $(".top").hide();
        else if(top >100)
         $(".top").css('display', 'inline-block');
        else if(top<=0){
        	$(".top").css('display', 'inline-block');
        }
    });
});
$(document).ready(function(){ 
  	  var top = $(document).scrollTop();
  	  if (top>=100) {
  	  	$(".top").css('display', 'inline-block');
  	  };
}) 
/*回到顶部*/
$(".top").click(function() {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
});
$(".top").hover(
	function(){
		$(".top").css('background', 'url(./image/gotop2.jpg) 0 0 no-repeat');
		$(".top").css('background-size', '34px 103px');
	},function(){
		$(".top").css('background', 'url(./image/gotop.jpg) 0 0 no-repeat');
		$(".top").css('background-size', '34px 103px');
	}
);
/*隐藏搜索*/
$("#search-btn").click(function() {
	$(".searchbox").animate({width:'toggle',opacity:'toggle'}, "slow");
});
$("#close-btn").click(function(event) {
	$(".searchbox").animate({width:'toggle',opacity:'toggle'}, "easein");
});
$("#search-btns").hover(
	function(){
		$(this).attr("class","search-icon seek-hover");
	},
	function(){
		$(this).attr("class","search-icon");
	}
);
/*nav文字效果*/
$(".head-div").children("ul").children("li").children(".submenu").children("a").hover(function() {
	$(this).css('color', '#35b558');
}, function() {
	$(this).css('color', '');
});
