$(function () {
    // 手机号的登录
    $("#radio_dynamic").click(function () {
        $("#login-dynamic-form").show();
        $("#login-user-form").hide();
    });
    // 普通登录
    $("#radio_normal").click(function () {
        $("#login-dynamic-form").hide();
        $("#login-user-form").show();
    });
    $("#login-user-form").submit(function () {//普通
        var val = $("#username").val();
        var password = $("#login_password").val();
        if(val === $.cookie("username") && password ===$.cookie("password") ){
            alert("登录成功");
            $.cookie("isLogined",true);
            location.href = "./index.html";
            return false;
        }else{
            alert("手机号或者密码不对");
            return false;
        }
        return false;
    });
    $("#login-dynamic-form").submit(function () {//手机
        var val = $("#dynamic_mobile").val();
        var password = $("#dynamic_password").val();
        if(val === $.cookie("username") && password ===$.cookie("password") ){
            alert("登录成功");
            $.cookie("isLogined",true);
            location.href = "./index.html";
            return false;
        }else{
            alert("手机号或者密码不对");
            return false;
        }
        return false;
    })
})