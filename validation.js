// validation script here
$("#name").focusout(function(){
    var user = $(this).val().trim();
    var reg = /^[a-z 0-9]{5,12}$/i;
    if(reg.test(user)){
        $(this).css("border-color", "green");
    } else{
        $(this).css("border-color", "red");
    }
});
$("#phoneNum").focusout(function(){
    var user = $(this).val().trim();
    var reg = /^00216[2459][0-9]{7}$/i;
    if(reg.test(user)){
        $(this).css("border-color", "green");
    } else{
        $(this).css("border-color", "red");
    }
});
$("#cardNum").focusout(function(){
    var user = $(this).val().trim();
    var reg = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/i;
    if(reg.test(user)){
        $(this).css("border-color", "green");
    } else{
        $(this).css("border-color", "red");
    }
});
$("#email").focusout(function(){
    var user = $(this).val().trim();
    var reg = /^[\w\.\-]{5,20}\@[a-z0-9]{5,7}\.[a-z]{2,3}$/i;
    if(reg.test(user)){
        $(this).css("border-color", "green");
    } else{
        $(this).css("border-color", "red");
    }
});
$("#password").focusout(function(){
    var user = $(this).val().trim();
    var reg = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/i;
    var reg1 = /[0-9]/g;
    var reg2 = /[a-z]/g;
    var reg3 = /[A-Z]/g;
    var reg4 = /^[a-zA-Z0-9]{8,12}$/
    if(reg1.test(user) && reg2.test(user) && reg3.test(user) && reg4.test(user)){
        $(this).css("border-color", "green");
    } else{
        $(this).css("border-color", "red");
    }
});