$(function () {
    //检查登录
    if($.cookie("isLogined")   == "true"){
        $("#headerTopLeft").hide();
        $("#headerTopLeft1").show();
        $(".username").html($.cookie("username"));
       $(".signout").click(function(e){
           e.preventDefault();
           $.cookie("isLogined",null);
           location.href ="./login.html";
       });
    }

    //更新购物车数量
    $(".cart_num").html($.cookie("goodsNum"));

    // 搜索栏下拉
    $(".header_search_input").focus(function () {
        $("#top_out_search_pop_div").addClass("search_result_pop").removeClass("search_result_pop_a");
        $(".search_result_pop div").hover(function () {
            $(this).addClass("selected").siblings("div").removeClass("selected")
        });
    });
    $(".header_search_input").blur(function () {
        $(".search_result_pop div").off("hover");
        $("#top_out_search_pop_div").addClass("search_result_pop_a").removeClass("search_result_pop");
    });
    // 购物车
    $("#cart_box").hover(function () {
        $(this).find(".cart_content_zero").slideDown();
    },function () {
        $(this).find(".cart_content_zero").slideUp();
    })
    /*导航下拉=》美妆商城*/
    $(".meizhuang_li").hover(function () {
        $(this).addClass("hover");
        $(".header_pop_subAtc").stop().slideDown();
        $(".header_pop_subAtc").off("hover");
    },function () {
        var timer = null;
        var _self = this;
        $(".header_pop_subAtc").hover(function () {
            clearTimeout(timer);
        },function () {
            $(".header_pop_subAtc").stop().slideUp();
            $(_self).removeClass("hover");
        });
        timer = setTimeout(function () {
            if(timer){
                $(".header_pop_subAtc").stop().slideUp();
                $(_self).removeClass("hover");
            }
        },500);
    });
    /*抢购tab部分*/
    $("#home_top_tab .tab_menu li").click(function () {
        var $this = $(this);
        var _index = $this.index();
        var home_top_tab =$this.closest("#home_top_tab");
        $this.addClass("current").siblings("li").removeClass("current");
        home_top_tab.find(".tab_box").hide().eq(_index).show();
    });
    /*左侧弹窗*/
    $(window).scroll(function () {
        if($(this).scrollTop() >= 500){
            $(".home_nav_bar").css({visibility:"visible"})
        }else{
            $(".home_nav_bar").css({visibility:"hidden"})
        }
    });

    /*右边侧栏*/
    $("#iBar").hover(function () {
        $(".mpbtn_cart").animate({left:0});
        $(".ibar_main_panel").animate({left:'0px'});
    },function () {
        $(".ibar_main_panel").animate({left:'40px'});
        $(".mpbtn_cart").animate({left:"-40px"})
    })
    $(".ibar_mp_center li").hover(function () {
        $(this).find(".mp_tooltip").css({visibility: "visible"});
    },function () {
        $(this).find(".mp_tooltip").css({visibility: "hidden"});
    });

    // banner轮播
    var swiperLi = $(".swiper-wrapper li").size();
    var swiperLiW = $(".swiper-wrapper li").width();
    $(".swiper-wrapper").css({width: swiperLi * swiperLiW +"px"})
    new Swiper ('.swiper-container', {
        autoplay:5000,
        pagination : '.swiper-pagination',
        paginationClickable:true,
        loop:true
    })
    //倒计时
    var interval = 1000;
    function ShowCountDown(year,month,day,divname)
    {
        var now = new Date();
        var endDate = new Date(year, month-1, day);
        var leftTime=endDate.getTime()-now.getTime();
        var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
        var day1=Math.floor(leftsecond/(60*60*24));
        var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
        var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
        var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
        second = second>9?second:0+""+second;
        minute = minute>9?minute:0+""+minute;
        hour = hour>9?hour:0+""+hour;
        var cc = $(divname);
        cc.html(day1+"<em>:</em>"+hour+"<em>:</em>"+minute+"<em>:</em>"+second);
    }
    window.setInterval(function(){ShowCountDown(2017,8,20,'.today_time');}, interval);


    // 点击加入购物车
    $(".goto_btn").click(function (event) {
        //console.log($.cookie("goodsNum"))
        var offset = $(".mpbtn_cart").offset();
        var img = $(".img_w1000").attr('src'); //获取当前点击图片链接
        var flyer = $('<img class="flyer-img" src="' + img + '">'); //抛物体对象
        var scrollLeft = $(window).scrollLeft();
        var scrollTop = $(window).scrollTop();
        flyer.fly({
            start: {
                left: event.pageX -scrollLeft,//抛物体起点横坐标
                top: event.pageY -scrollTop //抛物体起点纵坐标
            },
            end: {
                left:offset.left - scrollLeft + 10,//抛物体终点横坐标
                top: offset.top - scrollTop + 10, //抛物体终点纵坐标
            },
            onEnd: function() {
                flyer.hide();
                var num = $.cookie("goodsNum") || 0;
                $.cookie("goodsNum",Number(num)+1);
                $(".cart_num").html($.cookie("goodsNum"))
            }
        });
    });

});



/*
*
*
*
*  var offset = $("#icon-cart").offset();
 $(".addcart").click(function(event) {
 var img = $(this).parent().children('img').attr('src'); //获取当前点击图片链接
 var flyer = $('<img class="flyer-img" src="' + img + '">'); //抛物体对象
 flyer.fly({
 start: {
 left: event.pageX,//抛物体起点横坐标
 top: event.pageY //抛物体起点纵坐标
 },
 end: {
 left: offset.left + 10,//抛物体终点横坐标
 top: offset.top + 10, //抛物体终点纵坐标
 },
 onEnd: function() {
 $("#tip").show().animate({width: '200px'},300).fadeOut(500);////成功加入购物车动画效果
 this.destory(); //销毁抛物体
 }
 });
 }); */








