/**
 * Created by liu on 2017-08-04.
 */

$(function () {
    $(".item_ijumei,.item_more").hover(function () {
        $(this).addClass("hover");
        $(this).children(".sub_nav").stop().slideDown(200);
    },function () {
        $(this).removeClass("hover");
        $(this).children(".sub_nav").stop().slideUp(200);
    });
    // 二维码
    $(".mpbtn_qrcode").hover(function () {
        $(this).find(".mp_qrcode").show();
    },function () {
        $(this).find(".mp_qrcode").hide();
    });

    $(".mpbtn_support").hover(function () {
        $(this).find(".mp_tooltip").css({visibility:"visible"});
    },function () {
        $(this).find(".mp_tooltip").css({visibility:"hidden"});
    })
    //右侧栏显示登录
    $(".mpbtn_login").hover(function () {
        var mpbtnTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        $(".ibar_login_box ").css({top:mpbtnTop-scrollTop+"px"}).show(200);
    },function () {
        $(".ibar_login_box ").hide(200);
    })
});