$(document).ready(function(){
    // option 창
    var option = $(".option > li");
    var c;
    option.click(function(){
        var i = $(this).index();
        option.removeClass("selected");
        if (c == i) {
            $(this).removeClass("selected");
            c = 10;
        } else {
            $(this).addClass("selected");
            c = i;
        }
        
    });
    
    $(".sub-option > li").click(function(e){
        e.stopPropagation();
        $(this).toggleClass("selected");
    });
    $(".sub-opt > li").click(function(e){
        e.stopPropagation();
        $(this).toggleClass("selected");
    });
    
    // mobile filter box 
    var cur = 90;
    var onn = 0;
    $(".popup_opt > .optEl > a").click(function(e){
        e.preventDefault;
    });
    $(".popup_opt > .optEl").click(function(){
        
        if (onn == 1) {
            cur = 90;
        }

        var i = $(this).index();
        if (cur != i) {
            $(".sub-opt").slideUp();
            $(this).find(".sub-opt").stop().slideDown();
            onn = 2;
        } else {
            $(this).find(".sub-opt").stop().slideUp();
            onn = 1;
        }
        cur = i;
    });
    
    
    // list page 넘김
    var tableList = $(".productList > .list");
    var pageBtn = $(".pagenation button.page_num");
    var current = 0;
    var listNum = pageBtn.length;

    pageBtn.click(function(){
        pageBtn.removeClass("active");
        $(this).addClass("active");


        var i = $(this).index();
        tableList.removeClass("active");
        tableList.eq(i).addClass("active");

        current = i;
    });

    var arrow = $(".pagenation .arrow");
    arrow.on({
        mousedown: function(){
            $(this).toggleClass("active");
        },
        mouseup: function(){
            $(this).toggleClass("active");
        },
        mouseout: function(){
            $(this).removeClass("active");
        }
    });
    
    var current = 0;
    var left = $(".pagenation > .left");
    var right = $(".pagenation > .right");
    left.click(function(){
        
        if(current <= 0) {
            current = 0;
            return;
        }
        current -= 1;
        pageBtn.removeClass("active");
        pageBtn.eq(current).addClass("active");
        tableList.removeClass("active");
        tableList.eq(current).addClass("active");
        
    });
        
    right.click(function(){
        
        if(current >= listNum-1) {
            current = listNum-1;
            return;
        }
        current += 1;
        pageBtn.removeClass("active");
        pageBtn.eq(current).addClass("active")
        tableList.removeClass("active");
        tableList.eq(current).addClass("active");
        
    });
    
    // list 더보기 버튼
    var p = 0;
    $(".listPage .moreBtn").click(function(){
        p++;
        $(".productList .list").eq(p).addClass('active');
        if(p == $(".list").length - 1) {
            $(this).hide();
        }
    });
    
    // **리사이즈시 list 원상복구 시키기 //
    $(window).on('resize', function(){
        $(".productList .list").removeClass('active');
        $(".productList .list").eq(0).addClass('active');
        
        if (parseInt($('#content').css('width')) <= 640) {
            $('.moreBtn').show();
        } else return
    })
});