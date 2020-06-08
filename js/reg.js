$(document).ready(function(){
    
    $(".userpsw i").click(function(){
        $("#userpsw").toggleClass("showthis");
        
        if($("#userpsw").hasClass("showthis")){
            $(this).attr('class','far fa-eye').prev("input").attr('type','text');
        } else {
            $(this).attr('class','far fa-eye-slash').prev("input").attr('type','password');
        }
        
    });
    
    $(".logo-center").click(function(){
        window.close();
    });
    
});