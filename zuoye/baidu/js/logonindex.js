/*右侧滑动栏*/
$("#product").hover(
    function() {
        $("#hide").show();

    },
    function() {
        $("#hide").hide();
    }
);
$("#hide").hover(
    function() {
        $("#hide").show();

    },
    function() {
        $("#hide").hide();
    }
);
/*中间切屏*/
$(".s-menu-item").click(
    function() {
        var a = $(this).attr("data-id");
        if (a == 1) {
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
);
$("#s_menu_mine").click(
    function() {
        $(".s-menu-item").attr("class", "s-menu-item");
        $(this).attr("class", "current");
        $(".mine-icon").attr("class", "mine-icons mine-icon");
        $(".s_ctner_contents").hide();
        $("[name=ro-navigation]").show();
    }
);
/*换肤*/
$("#in-clothing-a").click(
    function() {
        $(".s-skin-layer").show();
    }

);
$(".s-skin-up").click(
    function() {
        $(".s-skin-layer").fadeToggle("fast");
        $(".s-skin-layer").hide();
    }
);
$(".news-content-div").click(
    function() {
        var blocks=$(".s-skin-layer").css("display");
        if (blocks=="block") {
            $(".s-skin-layer").fadeToggle("fast");
            $(".s-skin-layer").hide();
        }    
    }
);

$(".skin-img-item").click(
    function() {
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
    }
);
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
/*不使用皮肤*/
$(".s-skin-set").click(function(event) {
    $(".s-skin-layer").hide();
    $(".s-skin-container ").css("background-image", "url(" + ") ");
    $(".nav-div").attr("class", "nav-div");
    $(".nav-div").css("border", "1px solid #ebebeb");
    $(".s-icons").attr("class", "s-icons");
    $(".mnav").css("color", "#000");
    $("#product").css("color", "#fff");
    $(".show-weather").css("color", "#000");
    $(".show-polution-num").css("color", "#000");
    $("#logo").attr("src", "image/bd_logo1.png");
    $("#s_user_name_menu1").children("div").children("a").css("color", "#000");
    $("#s_user_name_menu2").children("div").children("a").css("color", "#000");
    localStorage.setItem("skin", "0");
});
/*动画点点*/
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
/*皮肤存储*/
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

});
/*判断用户登陆*/
$(document).ready(function() {
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
});
/*下拉伸缩*/
var x = 0;
$(document).ready(function() {
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
$('.to-top').click(function(event) {
    var sc = $(window).scrollTop();
    $('body,html').animate({ scrollTop: 0 }, 500);
});
$(".s-more-bar").click(function() {
    $("#s-news-list").show();
});
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
$(".skin-nav ").click(function() {
    $(".skin-nav").attr("class", "skin-nav");
    $(this).attr("class", "skin-nav nav-blue");
    var name = $(this).attr("name");
    $(".s-skin-photo-body").hide();
    $("[name=" + name + "]").show();
});
/*回到顶部*/
$(".to-top").hover(
        function() {
            $('.iconspan').hide();
            $(".text").show();
            $(".text").animate({ opacity: '1' });
        },
        function() {
            $(".text").hide();
            $('.iconspan').show();
        }
    )
    /*ajax天气预报*/
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
/*登陆-设置*/
$("#logo-logo").hover(function() {
    $("#s_user_name_menu1").show();
}, function() {
    $("#s_user_name_menu1").hide();
});
$("#set-logo").hover(function() {
    $("#s_user_name_menu2").show();
}, function() {
    $("#s_user_name_menu2").hide();
});
$("#s_user_name_menu1").children("div").hover(function() {
    $("#s_user_name_menu1").show();
}, function() {
    $("#s_user_name_menu1").hide();
});
$("#s_user_name_menu2").children("div").hover(function() {
    $("#s_user_name_menu2").show();
}, function() {
    $("#s_user_name_menu2").hide();
});
$("#s_user_name_menu2").children("div").children("a").hover(function() {
    $("#s_user_name_menu2").show();
    $(this).css("background", "#398bfb");
}, function() {
    $("#s_user_name_menu2").hide();
    $(this).css("background", "");
});
$("#s_user_name_menu1").children("div").children("a").hover(function() {
    $("#s_user_name_menu1").show();
    $(this).css("background", "#398bfb");
}, function() {
    $("#s_user_name_menu1").hide();
    $(this).css("background", "");
});
