$(document).ready(function(){
    
    $(".joinOptTab li").click(function(){
        $(".joinOptTab li").removeClass('on');
        $(this).addClass('on');
        
        var i = $(this).index();
        $(".joinOption li").removeClass('on');
        $(".joinOption li").eq(i).addClass('on');
    });
});