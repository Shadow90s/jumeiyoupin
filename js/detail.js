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
    $(".amout_input").val($.cookie("goodsNum"));
    //点击增减购物车数量
    $(".decrease_num").click(function(){
        var num = $.cookie("goodsNum");
        var newNum =Number(num) -1;
        newNum = newNum <0?0:newNum;
        $.cookie("goodsNum",newNum);
        location.reload();
    });
    $(".increase_num").click(function(){
        var num = $.cookie("goodsNum");
        var newNum =Number(num) +1;
        $.cookie("goodsNum",newNum);
        location.reload();
    });
    $(".amout_input").blur(function(){
        $.cookie("goodsNum",this.value);
        location.reload();
    });

    /*导航下拉=》美妆商城*/
    $(".meizhuang_li").hover(function () {
        $(this).addClass("hover");
        $(".header_pop_subAtc").stop().slideDown();
        $(".header_pop_subAtc").off("hover");
    }, function () {
        var timer = null;
        var _self = this;
        $(".header_pop_subAtc").hover(function () {
            clearTimeout(timer);
        }, function () {
            $(".header_pop_subAtc").stop().slideUp();
            $(_self).removeClass("hover");
        });
        timer = setTimeout(function () {
            if (timer) {
                $(".header_pop_subAtc").stop().slideUp();
                $(_self).removeClass("hover");
            }
        }, 500);
    });
    // 选择商品图片
    $(".ac_container ul li").click(function () {
        $(this).addClass("hover").siblings("li").removeClass("hover");
        var _src = $(this).find("img").attr("src");
        var _big = $(this).find("img").attr("big");
        $("#deal_img").attr({src: _src, jqimg: _big})
    });
    // 选择类型
    $(".J_size_wrap li").click(function () {
        $(this).addClass("size_selected").siblings().removeClass("size_selected");
    });
    // 放大镜部分
    $(".jqzoom").jqueryzoom({
        xzoom: 363,
        yzoom: 488,
        offset: 20,
        position: "right",
        preload: 1,
        lens: 1
    });

    /*右边侧栏*/
    $("#iBar").hover(function () {
        $(".mpbtn_cart").animate({left: 0});
        $(".ibar_main_panel").animate({left: '0px'});
    }, function () {
        $(".ibar_main_panel").animate({left: '40px'});
        $(".mpbtn_cart").animate({left: "-40px"})
    })
    $(".ibar_mp_center li").hover(function () {
        $(this).find(".mp_tooltip").css({visibility: "visible"});
    }, function () {
        $(this).find(".mp_tooltip").css({visibility: "hidden"});
    })

    // 固定导航条
    var init={
        detailTabs:function () {
            var c = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body");
            function e() {
                for (var e = t.offset().top, i = 0, a = s.length; i < a; i++) if ($(s[i]).length) {
                    var r = $(s[i]).offset().top;
                    if (!r) break;
                    e > r - 60 && $("a", t).eq(i).parent().addClass("curr_nav").siblings("li").removeClass("curr_nav")
                }
            }

            var t = $("#deal_nav_con"),
                i = $(".main_detail").offset(),
                a = $(document).width(),
                s = [];
            $(".deal_nav ul").eq(0).find("a").each(function () {
                s.push($(this).attr("href"))
            }),
                $(window).scroll(function () {
                    if (!i) return !0;
                    $(window).scrollTop() > i.top ? ("ie" == c.browser && "6.0" == c.browserVersion ? t.css({
                        position: "absolute",
                        top: $(window).scrollTop(),
                        width: a
                    }) : t.css({
                        position: "fixed",
                        top: 0,
                        width: a
                    }), t.next().css("padding-top", "50px"), t.addClass("nav_shadow"), e()) : (t.removeClass("nav_shadow"), t.removeAttr("style"), t.next().css("padding-top", "15px"), $(".curr_nav").removeClass("curr_nav"))
                }).trigger("scroll")

        }
    }
    init.detailTabs();



    // 购物车
    $("#cart_box").hover(function () {
        $(this).find(".cart_content_zero").slideDown();
    },function () {
        $(this).find(".cart_content_zero").slideUp();
    })

    // 点击加入购物车
    $("#add_to_cart").click(function (event) {

        var offset = $(".mpbtn_cart").offset();
        var img = $(".ac_container .hover img").attr('src'); //获取当前点击图片链接
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
                $(".cart_num").html($.cookie("goodsNum"));
                $(".amout_input").val($.cookie("goodsNum"));
            }
        });
    });


});
(function () {
    function e(e) {
        this.x = e.pageX - $(".jqzoom").offset().left,
            this.y = e.pageY - $(".jqzoom").offset().top
    }

    $.fn.jqueryzoom = function (t) {
        var i = {
            xzoom: 200,
            yzoom: 200,
            offset: 10,
            position: "right",
            lens: 1,
            preload: 1
        };
        t && $.extend(i, t);
        var a = "";
        $(this).hover(function () {
                var t, s = $(this).children("img").get(0).offsetWidth,
                    r = $(this).children("img").get(0).offsetHeight,
                    o = 0;
                a = $(this).children("img").attr("alt");
                var n = $(this).children("img").attr("jqimg");
                $(this).children("img").attr("alt", ""),
                0 === $("div.zoomdiv").get().length && "" !== n && ($(this).after("<div class='zoomdiv'><img class='bigimg' src='" + n + "'/></div>"), $(this).append("<div class='jqZoomPup'>&nbsp;</div>")),
                    "right" == i.position ? o = 0 + s + i.offset + i.xzoom > screen.width ? 0 - i.offset - i.xzoom : 0 + s + i.offset : (o = 0 - i.xzoom - i.offset) < 0 && (o = 0 + s + i.offset),
                    $("div.zoomdiv").css({
                        top: 0,
                        left: o
                    }),
                    $("div.zoomdiv").width(i.xzoom),
                    $("div.zoomdiv").height(i.yzoom),
                    $("div.zoomdiv").fadeIn(),
                i.lens || $(this).css("cursor", "crosshair"),
                    $(document.body).mousemove(function (a) {
                        if (t = new e(a), 0 === $(".bigimg").length) return !1;
                        var o, n, l, c, d = $(".bigimg").get(0).offsetWidth,
                            m = $(".bigimg").get(0).offsetHeight,
                            u = "x",
                            _ = "y";
                        isNaN(_) | isNaN(u) && (_ = d / s, u = m / r, $("div.jqZoomPup").width(i.xzoom / _), $("div.jqZoomPup").height(i.yzoom / u), i.lens && $("div.jqZoomPup").css("visibility", "visible")),
                            o = t.x - $("div.jqZoomPup").width() / 2 - 0,
                            n = t.y - $("div.jqZoomPup").height() / 2 - 0,
                        i.lens && (o = t.x - $("div.jqZoomPup").width() / 2 < 0 ? 0 : t.x + $("div.jqZoomPup").width() / 2 > s + 0 ? s - $("div.jqZoomPup").width() - 2 : o, n = t.y - $("div.jqZoomPup").height() / 2 < 0 ? 0 : t.y + $("div.jqZoomPup").height() / 2 > r + 0 ? r - $("div.jqZoomPup").height() - 2 : n),
                        i.lens && $("div.jqZoomPup").css({
                            top: n,
                            left: o
                        }),
                            c = n,
                            $("div.zoomdiv").get(0).scrollTop = c * u,
                            l = o,
                            $("div.zoomdiv").get(0).scrollLeft = l * _
                    })
            },
            function () {
                $(this).children("img").attr("alt", a),
                    $(document.body).unbind("mousemove"),
                i.lens && $("div.jqZoomPup").fadeOut(function () {
                    $(this).remove()
                }),
                    $("div.zoomdiv").fadeOut(function () {
                        $(this).remove()
                    })
            });
        i.preload && ($("body").append("<div style='display:none;' class='jqPreload0'>sdsdssdsd</div>"), $(this).each(function () {
            var e = $(this).children("img").attr("jqimg"),
                t = jQuery("div.jqPreload0").html();
            jQuery("div.jqPreload0").html(t + '<img src="' + e + '">')
        }))
    }
})()

