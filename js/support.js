$(document).ready(function(){
                  
    $(".tab>ul>li").click(function(){
        var i = $(this).index();
        $(".tab>ul>li").removeClass('active');
        $(this).addClass('active');
        $(".tabCont>ul>li").removeClass('active');
        $(".tabCont>ul>li").eq(i).addClass('active');
    });
    
    $(".helpBox .goContact").click(function(){
        
        $(".tab>ul>li").removeClass('active');
        $(".tab>ul>li").eq(0).addClass('active');
        $(".tabCont>ul>li").removeClass('active');
        $(".tabCont>ul>li").eq(0).addClass('active');
    });
    $(".helper .showMore").click(function(){
        
        $(".tab>ul>li").removeClass('active');
        $(".tab>ul>li").eq(1).addClass('active');
        $(".tabCont>ul>li").removeClass('active');
        $(".tabCont>ul>li").eq(1).addClass('active');
    });
    $(".suppBtn .toFaq").click(function(){
        
        $(".tab>ul>li").removeClass('active');
        $(".tab>ul>li").eq(1).addClass('active');
        $(".tabCont>ul>li").removeClass('active');
        $(".tabCont>ul>li").eq(1).addClass('active');
    });
    
    
    var cur = 90;
    var onn = 0;
    // 1 tab
    $(".suppBtn .click-to").click(function(){
        var j = $(this).index();
        if (onn == 1) {
            cur = 90;
        }
        
        if (cur != j) {
            $(".suppBtn .click-to").find(".suppPop").hide();
            $(this).find(".suppPop").stop().slideDown();
            onn = 2;
        } else {
            $(this).find(".suppPop").stop().slideUp();
            onn = 1;
        }
        cur = j;
    });
    
    // 2 tab
    $(".helpBox > ul > li").click(function(){
        if(parseInt($("#foot").css('width')) <= 640) {
           
            if (onn == 1) {
                cur = 90;
            }

            var i = $(this).index();
            if (cur != i) {
                $(".help-sub").slideUp();
                $(this).find(".help-sub").stop().slideDown();
                onn = 2;
            } else {
                $(this).find(".help-sub").stop().slideUp();
                onn = 1;
            }
            cur = i;
            
        } else $(".help-sub").show();
    });

});