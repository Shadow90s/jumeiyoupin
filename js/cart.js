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

    //计算金额
    var num = $.cookie("goodsNum");
    $(".item_quantity").val(num);
   /* console.log(num)
    console.log(Number(num)*(39.9));*/
    $(".item_total_price,.group_total_price,.total_price").html((Number(num) * (39.9)).toFixed(2));


    // 最近查看过
    $(".nav_tips a").hover(function () {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".JS_recommend_cont").hide();
        $(".JS_recommend_cont").eq(_index).show();
    });

    $(".decrease_one").click(function(){
        var num = $.cookie("goodsNum");
        var newNum =Number(num) -1;
        newNum = newNum <0?0:newNum;
        $.cookie("goodsNum",newNum);
        location.reload();
    });
    $(".increase_one").click(function(){
        var num = $.cookie("goodsNum");
        var newNum =Number(num) +1;
        $.cookie("goodsNum",newNum);
        location.reload();
    });
    $(".item_quantity").blur(function(){
        $.cookie("goodsNum",this.value);
        location.reload();
    });

})
