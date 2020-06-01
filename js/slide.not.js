$(document).ready(function(){
    var ht = $(window).height();
    var mainVisual = $("#visualSlide");
    mainVisual.height(ht);

    $(window).on("resize", function(){
        var ht = $(window).height();
        mainVisual.height(ht);

    });
    
    if($(window).height < 640){
        $(".noticeBox").hide();
    }// 높이 640 미만일때 보이지 않도록,
    
    
    //
    
    var slideVisual = $(".slide>ul>li");
    var slidePage = $(".slidePageNum>ul>li");
    var end = slidePage.length - 1;
    var c = 0;
    var setIntervalId = 0;
    
    slidePage.click(function(){
        var tg = $(this);
        var i = tg.index();
        slidePage.removeClass('active');
        tg.addClass('active');
        
        if (i > c) {
            move(i);
        } else if (c==end && i==0) {
            move(i);
        } else if (i < c) {
            movePre(i);
        } else if (c==0 && i==end) {
            movePre(i);
        } else return
    });
    
    function move(i){
        if(c == i) return;
        
        var current = slideVisual.eq(c);
        var next = slideVisual.eq(i);
        
        current.css({left:0}).stop().animate({'left':'-100%'});
        next.css({left:'100%'}).stop().animate({'left':'0'});
        
        c = i;
    }
    function movePre(i){
        slidePage.removeClass('active');
        slidePage.eq(i).addClass('active');
        
        if(c == i) return;
        var current = slideVisual.eq(c);
        var prev = slideVisual.eq(i);
        current.css({left:0}).stop().animate({'left':'100%'});
        prev.css({left:'-100%'}).stop().animate({'left':'0'});
        
        c = i;
    }
    
    $(window).on("mousemove",function(e){
        // 변수에 마우스 커서의 x축, y축 위치 저장
        var posX = e.pageX;
        var posY = e.pageY;

        $(".titleBox1").css({"left":210+(posX/10), "top":400+(posY/10) });
        $(".sImg11").css({"left":20+(posX/6), "top":20+(posY/3) });
        $(".sImg12").css({"right":130+(posX/6), "bottom":-40+(posY/3) });
        $(".titleBox2").css({"left":260+(posX/9), "top":520+(posY/10) });
        $(".sImg21").css({"left":430+(posX/6), "top":180+(posY/3) });

        $(".sImg22").css({"left":380+(posX/9), "top":200+(posY/7) });
        $(".sImg23").css({"right":220+(posX/5), "top":200+(posY/5) });

        $(".titleBox3").css({"right":210+(posX/11), "top":310+(posY/9) });
        $(".sImg31").css({"left":210+(posX/6), "bottom":30+(posY/6) });
        $(".sImg32").css({"left":490+(posX/3), "bottom":100+(posY/5) });
        $(".sImg33").css({"right":200+(posX/5), "bottom":270+(posY/5) });

        $(".titleBox4").css({"left":450+(posX/7), "top":570+(posY/10) });
        $(".sImg41").css({"right":-20+(posX/5), "top":-80+(posY/3) });
    });
});