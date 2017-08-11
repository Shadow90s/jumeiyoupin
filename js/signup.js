$(function () {
    $("#phone").submit(function (e) {
            e.stopPropagation();
            var mobileVa = $("#mobile").val();
            var passwordVal  = $("#password").val();
            var password2Val  = $("#password2").val();
            if(!(/^1[34578]\d{9}$/.test(mobileVa))){
                $("#mobile").val("");
                $("#mobile").focus();
                alert("手机号码有误，请重填");
                return false;
            }
            if (passwordVal == null || passwordVal.length <6) {
                alert("密码格式不对");
                return false;
            }
            if (passwordVal !== password2Val) {
                alert("两次密码不一致");
                return false;
            }
            $.cookie("username",mobileVa);
            $.cookie("password",passwordVal);
            $.cookie("isLogined",false);
            alert("注册成功");
            location.href = "./login.html";
        return false;
    });
})