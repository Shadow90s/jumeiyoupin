$(function () {
    if($(".bottom-confirm").offset().top - window.innerHeight >= $(window).scrollTop()){
        $(".confirm_pay").addClass("bottom");
    }else {
        $(".confirm_pay").removeClass("bottom");
    }
   $(window).scroll(function () {
       //bottom  confirm_pay
       var confirm_payTop = $(".bottom-confirm").offset().top;
       var sTop =$(this).scrollTop();
        if(confirm_payTop - window.innerHeight >= sTop){
            $(".confirm_pay").addClass("bottom");
        }else {
            $(".confirm_pay").removeClass("bottom");
        }
   });
    $(".submit_btn").click(function () {
        alert("交易成功");
        $.cookie("goodsNum",0);
        location.href = "./index.html";
    })

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
    console.log(num)
    $(".goodsNum").html(num);
    $(".price-to-align,.sum,.total_price").html((Number(num) *39.9).toFixed(2));
});
