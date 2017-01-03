/*hover类*/
function hoverPlanms(hovername) {
    var hoverFun = $(hovername).hover(
        function() {
            var ts = this;
            if (hovername == ".skin-img-item") {
                $(ts).children(".skin-img-item-writer").css("opacity", "1");
                $(ts).children(".skin-img-shadow").css("opacity", "0.6");
                return hoverFun;
            } else if (hovername == '#product' || hovername == '#hide') {
                $("#hide").show();
                return hoverFun;
            } else if (hovername == ".to-top") {
                $('.iconspan').hide();
                $(".text").show();
                $(".text").animate({ opacity: '1' });
                return hoverFun;
            } else if (hovername == "#logo-logo") {
                $("#s_user_name_menu1").show();
                return hoverFun;
            } else if (hovername == "#set-logo") {
                $("#s_user_name_menu2").show();
                return hoverFun;
            }else if(hovername==".skin-img-item"){
            	  $(ts).children(".skin-img-item-writer").css("opacity", "1");
        		  $(ts).children(".skin-img-shadow").css("opacity", "0.6");
        		  return hoverFun;
            }
        },function() {
            var ts = this;
            if (hovername == ".skin-img-item") {
                $(ts).children(".skin-img-item-writer").css("opacity", "0");
                $(ts).children(".skin-img-shadow").css("opacity", "0");
                return hoverFun;
            } else if (hovername == '#product' || hovername == '#hide') {
                $("#hide").hide();
                return hoverFun;
            } else if (hovername == '.to-top') {
                $(".text").hide();
                $('.iconspan').show();
                return hoverFun;
            } else if (hovername == "#s_user_name_menu1") {
                $("#s_user_name_menu1").hide();
                return hoverFun;
            } else if (hovername == "#set-logo") {
                $("#s_user_name_menu2").hide();
                return hoverFun;
            }else if(hovername==".skin-img-item"){
            	 $(ts).children(".skin-img-item-writer").css("opacity", "0");
       			 $(ts).children(".skin-img-shadow").css("opacity", "0");
       			 return hoverFun;
            }
        }
    );
}
$(".skin-img-item").hover(
    function() {
        $(this).children(".skin-img-item-writer").css("opacity", "1");
        $(this).children(".skin-img-shadow").css("opacity", "0.6");
    },
    function() {
        $(this).children(".skin-img-item-writer").css("opacity", "0");
        $(this).children(".skin-img-shadow").css("opacity", "0");
    }

);
/*特殊hover*/
function hoverPlanmT(hovername) {
    var hoverFun = $(hovername).children("div").hover(
        function() {
            if (hovername == "#s_user_name_menu1") {
                $("#s_user_name_menu1").show();
                return hoverFun;
            } else if (hoverFun == "#s_user_name_menu2") {
                $("#s_user_name_menu2").show();
            }
        },
        function() {
            if (hovername == "#s_user_name_menu1") {
                $("#s_user_name_menu1").hide();
                return hoverFun;
            } else if (hoverFun == "#s_user_name_menu2") {
                $("#s_user_name_menu2").hide();
            }
        }
    );
}
/*特殊2*/
function hoverPlanmTa(hovername) {
    var hoverFun = $(hovername).children("div").children("a").hover(
        function() {
            var ts = this;
            if (hovername == "#s_user_name_menu2") {
                $("#s_user_name_menu2").show();
                $(ts).css("background", "#398bfb");
                return hoverFun;
            } else if (hovername == "#s_user_name_menu1") {
                $("#s_user_name_menu1").show();
                $(ts).css("background", "#398bfb");
                return hoverFun;
            }
        },
        function() {
            var ts = this;
            if (hovername == "#s_user_name_menu2") {
                $("#s_user_name_menu2").hide();
                $(ts).css("background", "");
                return hoverFun;
            } else if (hovername == "#s_user_name_menu1") {
                $("#s_user_name_menu1").hide();
                $(ts).css("background", "");
                return hoverFun;
            }
        }
    );
}

/*Click类*/
function clickPlanms(e) {
    var clickFun = $(e).click(
        function() {
            var ts = this;
            var dataid = $(ts).attr("data-id");
            if (dataid == 1) {
                $(".s-menu-item").attr("class", "s-menu-item");
                $(this).attr("class", "s-menu-item current");
                var name = $(this).attr("name");
                switch (name) {
                    case "ecommend-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("#s_menu_mine").attr("class", "not");
                        $("[name=ecommend-span]").show();
                        return;
                    case "navigation-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("[name=navigation-span]").show();
                        return;
                    case "video-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("[name=video-span]").show();
                        return;
                    case "shopping-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("[name=shopping-span]").show();
                        return;
                }
            } else {
                $(".s-menu-item").attr("class", "s-menu-item");
                $(this).attr("class", "s-menu-item current");
                $(".s-menu-item").attr("data-id", "2");
                $(this).attr("data-id", "1");
                var name = $(this).attr("name");
                switch (name) {
                    case "ecommend-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("#s_menu_mine").attr("class", "not");
                        $("[name=ecommend-span]").show();
                        return;
                    case "navigation-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("#s_menu_mine").attr("class", "not");
                        $("[name=navigation-span]").show();
                        return;
                    case "video-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("#s_menu_mine").attr("class", "not");
                        $("[name=video-span]").show();
                        return;
                    case "shopping-span":
                        $(".s_ctner_contents").hide();
                        $(".mine-icon").attr("class", "mine-icon");
                        $("#s_menu_mine").attr("class", "not");
                        $("[name=shopping-span]").show();
                        return;
                }
            }
        }
    )
    return clickFun;
}
/*普通click*/
function clickCommon(e) {
    var clickComm = $(e).click(
        function(argument) {
            if (e == ".news-content-div" || e == ".s-skin-up") {
                var blocks = $(".s-skin-layer").css("display");
                if (blocks == "block" || e == ".s-skin-up") {
                    $(".s-skin-layer").fadeToggle("fast");
                    $(".s-skin-layer").hide();
                    return clickComm;
                }
            } else if (e == "#in-clothing-a") {
                $(".s-skin-layer").show();
                return clickComm;
            } else if (e == "#s_menu_mine") {
                $(".s-menu-item").attr("class", "s-menu-item");
                $(this).attr("class", "current");
                $(".mine-icon").attr("class", "mine-icons mine-icon");
                $(".s_ctner_contents").hide();
                $("[name=ro-navigation]").show();
                return clickComm;
            } else if (e == ".skin-img-item") {
                $(".skin-img-item").removeClass("choose-li");
                $(this).addClass("choose-li", this);
                var imga = $(this).children(".skin-img-item-img")[0].src;
                $("[name=s_skin_preview_skin]").attr("src", imga);
                $(".preview-pageUI").css("background-position", "0 0");
                var ima = imga.substr(0, imga.length - 7);
                var back = imga.substr(imga.length - 7);
                var images = ima + "da/" + back;
                $(".s-skin-container ").css("background-image", "url(" + images + ") ");
                $(".content-div-main").css("background", "#fff");
                var logo = ima + "logo_white.png";
                $("#logo").attr("src", logo);
                $(".mnav").css("color", "#fff");
                $(".nav-div").css("border", "none");
                $(".nav-div").attr("class", "nav-div back-img");
                $(".s-icons").attr("class", "s-icons s-icons-a");
                $(".show-weather").css("color", "#fff");
                $(".show-polution-num").css("color", "#fff");
                $("#s_user_name_menu1").children("div").children("a").css("color", "#fff");
                $("#s_user_name_menu2").children("div").children("a").css("color", "#fff");
                localStorage.setItem("skin", "1");
                localStorage.setItem("url2", imga);
                localStorage.setItem("url", images);
                return clickComm;
            } else if (e == ".s-skin-set") {
                $(".s-skin-layer").hide();
                $(".s-skin-container ").css("background-image", "url(" + ") ");
                $(".nav-div").attr("class", "nav-div");
                $(".nav-div").css("border", "1px solid #ebebeb");
                $(".s-icons").attr("class", "s-icons");
                $(".mnav").css("color", "#000");
                $("#product").css("color", "#fff");
                $(".show-weather").css("color", "#000");
                $(".show-polution-num").css("color", "#000");
                $("#logo").attr("src", "image/bdlogo.png");
                $("#s_user_name_menu1").children("div").children("a").css("color", "#000");
                $("#s_user_name_menu2").children("div").children("a").css("color", "#000");
                localStorage.setItem("skin", "0");
                return clickComm;
            } else if (e == ".to-top") {
                var sc = $(window).scrollTop();
                $('body,html').animate({ scrollTop: 0 }, 500);
                return clickComm;
            } else if (e == ".s-more-bar") {
                $("#s-news-list").show();
                return clickComm;
            } else if (e == ".skin-nav") {
                var ts = this;
                $(".skin-nav").attr("class", "skin-nav");
                $(ts).attr("class", "skin-nav nav-blue");
                var name = $(ts).attr("name");
                $(".s-skin-photo-body").hide();
                $("[name=" + name + "]").show();
            }
        }
    );
}
/*fb*/
$("#kw").focus(
    function() {
        var sod = "1px solid #3388ff";
        $("#du").css("border", sod);
    });
$("#kw").blur(
    function() {
        var sod = "1px solid #b6b6b6";
        $("#du").css("border", sod);
    }
);
/*特殊动画*/
var dire = "bottom";
(function() {
    var css = {
        'top': "10%"
    };
    if (dire == 'bottom') {
        dire = 'top';
        css.top = "60%";
    } else {
        dire = 'bottom';
    }
    $('.animate-arrow').animate(css, arguments.callee);
})();
/*皮肤储存*/
$(document).ready(function() {
    var skin = localStorage.getItem("skin");
    var image1 = localStorage.getItem("url");
    var image2 = localStorage.getItem("url2");
    if (skin == 1) {
        $(".preview-pageUI").css("background-position", "0 0");
        $("[name=s_skin_preview_skin]").attr("src", image2);
        $(".s-skin-container ").css("background-image", "url(" + image1 + ") ");
        $(".content-div-main").css("background", "#fff");
        var ima = image2.substr(0, image2.length - 7);
        var logo = ima + "logo_white.png";
        $("#logo").attr("src", logo);
        $(".mnav").css("color", "#fff");
        $(".nav-div").css("border", "none");
        $(".nav-div").attr("class", "nav-div back-img");
        $(".s-icons").attr("class", "s-icons s-icons-a");
        $(".show-weather").css("color", "#fff");
        $(".show-polution-num").css("color", "#fff");
        $("#s_user_name_menu1").children("div").children("a").css("color", "#fff");
        $("#s_user_name_menu2").children("div").children("a").css("color", "#fff");
    }
    var logo = localStorage.getItem("logo");
    if (!logo) {
        alert("未登录！请登录后查看");
        location.href = "./index.html";
    } else {
        $("#logo-logo").html(logo);
    };
    if (logo == "undefined") {
        alert("未登录！请登录后查看");
        location.href = "./index.html";
    };
    $('.to-top').hide();
    var dochegth = $(document).height();
    var divxia = $('.s-more-up').offset().top;
    var dochegth = $(document).height();
    $(window).scroll(function() {
        x = $(this).scrollTop();
        if (x <= 5) {
            $(".form-div").attr("class", "form-div");
            $(".nav-div").attr("class", "nav-div");
            $("#result_logo").attr("class", "");
            $("#s_xmancard_news").css("height", "");
            $(".s-news-rank-wrapper").attr("class", "s-news-rank-wrapper");
            $(".rect").show();
            $('.to-top').hide();
        }
        if (x > dochegth - divxia) {
            $("#s-news-list").show();
            $(".form-div").attr("class", "form-div s-down");
            $(".nav-div").attr("class", "nav-div s-down-div");
            $("#result_logo").attr("class", "s-logo-a");
            $(".s-news-rank-wrapper").attr("class", "s-news-rank-wrapper pors");
            $("#s_xmancard_news").css("height", "100%");
            $(".rect").hide();
            $('.to-top').show();
        }
        if (dochegth >= "1080") {
            if (x > 92) {
                $("#s-news-list").show();
                $(".form-div").attr("class", "form-div s-down");
                $(".nav-div").attr("class", "nav-div s-down-div");
                $("#result_logo").attr("class", "s-logo-a");
                $(".s-news-rank-wrapper").attr("class", "s-news-rank-wrapper pors");
                $("#s_xmancard_news").css("height", "100%");
                $(".rect").hide();
                $('.to-top').show();
            }
        }
    });
});
/*换肤*/
clickCommon('.s-skin-up');
clickCommon('.news-content-div');
clickCommon('#in-clothing-a');
clickCommon('.skin-img-item');
clickCommon('.to-top');
clickCommon('.s-more-bar');
clickCommon('.skin-nav');
clickCommon(".s-skin-set");
/*中间切屏*/
clickCommon('#s_menu_mine');
clickPlanms(".s-menu-item");
/*右侧hover*/
hoverPlanms('#product');
hoverPlanms('#hide');
hoverPlanms(".skin-img-item");
hoverPlanms(".to-top");
hoverPlanms("#logo-logo");
hoverPlanms("#set-logo");
hoverPlanmT("#s_user_name_menu1");
hoverPlanmT("#s_user_name_menu2");
hoverPlanmTa("#s_user_name_menu2");
hoverPlanmTa("#s_user_name_menu1");
hoverPlanms(".skin-img-item");

$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
    if (remote_ip_info.ret == '1') {
        $.ajax({
            type: "GET",
            url: "http://wthrcdn.etouch.cn/weather_mini?city=" + remote_ip_info.city,
            data: "",
            success: function(msg) {
                var obj = msg;
                var jnone = [];
                eval("jnone=" + obj);
                $(".show-city-name").html(jnone.data.city + "：");
                $(".show-polution-num").html(jnone.data.aqi);
                var degree = jnone.data.aqi;
                var pollute = "";
                if (degree < 200) {
                    pollute = "轻度";
                    $(".show-polution-name").css("color", "#badc00");
                } else if (degree > 200 && degree < 300) {
                    pollute = "中度";
                    $(".show-polution-name").css("color", "#fea700");
                } else if (degree > 300) {
                    pollute = "重度";
                    $(".show-polution-name").css("color", "#fd0000");
                } else if (degree > 500) {
                    pollute = "北京般的雾霾";
                    $(".show-polution-name").css("color", "#000");
                };

                $(".show-polution-name").html(pollute);
                $(".weather-icon").html(jnone.data.yesterday.type);
                $(".show-icon-temp").html(jnone.data.wendu + "℃");
            }
        });
    }
});
