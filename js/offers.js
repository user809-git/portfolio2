$(document).ready(function(){
    
    $(".clickTo").click(function(){
        $(this).parent().children(".offer-terms").slideToggle();
    });
    
    $(".offer-terms").click(function(){
        $(this).slideUp();
    });
});