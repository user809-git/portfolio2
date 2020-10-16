$(document).ready(function () {
    var wh = $(window).height();
    var mainVisual = $("#visualSlide");
    mainVisual.height(wh);

    $(window).on("resize", function () {

        mainVisual.height(wh);

        if ($(window).height() <= 640) {
            $("#noticeBox").hide();
        } else if ($(window).height() > 640 && $(window).width() >= 1200) {
            $("#noticeBox").show();
        } else return;

    });



    // slide scroll down
    $(".scroll-down").click(function () {
        $("html, body").stop().animate({ scrollTop: wh }, wh / 2, 'easeOutCubic');
    });


    // container scroll-parallax
    var sec1tit = $(".eventBox .contTit").offset().top;
    var sec2tit = $(".categBox .contTit").offset().top;
    var sec3tit = $(".hotiBox .contTit").offset().top;
    var sec4tit = $(".seriesBox .contTit").offset().top;
    var sec5tit = $(".spotlBox .contTit").offset().top;

    var sec1item = $(".eventBox .eventWrap").offset().top;
    var sec2item = $(".categBox .categWrap").offset().top;
    var sec3item = $(".hotiBox .hotiWrap").offset().top;
    var sec4item = $(".seriesBox .seriesWrap").offset().top;
    var sec5item = $(".spotlBox .spotlWrap").offset().top;

    $(window).scroll(function () {

        var value = $(this).scrollTop() + wh / 2;
        var sec1 = parseInt($(".eventBox").offset().top);
        var sec2 = parseInt($(".categBox").offset().top);
        var sec3 = parseInt($(".hotiBox").offset().top);
        var sec4 = parseInt($(".seriesBox").offset().top);
        var sec5 = parseInt($(".spotlBox").offset().top);

        var move1 = (sec1tit - value) * 0.1;
        var move2 = (sec2tit - value) * 0.1;
        var move3 = (sec3tit - value) * 0.1;
        var move4 = (sec4tit - value) * 0.1;
        var move5 = (sec5tit - value) * 0.1;

        $(".eventBox .contTit").stop().animate({ "top": move1 * 0.5 });
        $(".eventBox .eventWrap").stop().animate({ "top": move1 + 5 });

        $(".categBox .contTit").stop().animate({ "top": move2 * 0.5 });
        $(".categBox .categWrap").stop().animate({ "top": move2 + 5 });

        $(".hotiBox .contTit").stop().animate({ "top": move3 * 0.5 });
        $(".hotiBox .hotiWrap").stop().animate({ "top": move3 + 7 });

        $(".seriesBox .contTit").stop().animate({ "top": move4 * 0.5 });
        $(".seriesBox .seriesWrap").stop().animate({ "top": move4 + 5 });
        $(".s-prev-arr").stop().animate({ "top": 115 + move4 * 0.2 });
        $(".s-next-arr").stop().animate({ "top": 115 + move4 * 0.2 });

        $(".spotlBox .contTit").stop().animate({ "top": move5 * 0.5 });
        $(".spotlBox .spotlWrap").stop().animate({ "top": move5 - 2 });

    });



    // visual slide swiper
    mainVisual.on("mousemove", function (e) {
        // 변수에 마우스 커서의 x축, y축 위치 저장
        var posX = e.pageX / 100;
        var posY = e.pageY / 100;

        $(".titleBox1").css({
            "left": 24 + posX + "%",
            "top": 50 + posY + "%"
        });
        $(".sImg11").css({
            "left": 10 + posX + "%",
            "top": 10 + posY + "%"
        });
        $(".sImg12").css({
            "right": 5 + posX + "%",
            "bottom": 30 + posY + "%"
        });
        $(".titleBox2").css({
            "left": 22 + posX + "%",
            "top": 65 + posY + "%"
        });
        $(".sImg21").css({
            "left": 35 + posX + "%",
            "top": 30 + posY + "%"
        });

        $(".sImg22").css({
            "left": 20 + posX + "%",
            "top": 35 + posY + "%"
        });
        $(".sImg23").css({
            "right": 20 + posX + "%",
            "top": 40 + posY + "%"
        });

        $(".titleBox3").css({
            "right": 13 + posX + "%",
            "top": 35 + posY + "%"
        });
        $(".sImg31").css({
            "left": 12 + posX + "%",
            "bottom": 25 + posY + "%"
        });
        $(".sImg32").css({
            "left": 35 + posX + "%",
            "bottom": 21 + posY + "%"
        });
        $(".sImg33").css({
            "right": 15 + posX + "%",
            "bottom": 30 + posY + "%"
        });

        $(".titleBox4").css({
            "left": 27 + posX + "%",
            "top": 60 + posY + "%"
        });
        $(".sImg41").css({
            "right": 15 + posX + "%",
            "top": 20 + posY + "%"
        });
    });



    $(".series-showall").click(function () {
        $(this).hide();
        $(".seriesWrap").css('height', '2380px');
    });


    // series pagination
    var cur = 0;
    var ww = $(window).width() + 17;
    var sw = $(".seriesWrap").outerWidth() * 0.6;
    var sl = $(".seriesWrap ul .itemS").length - 1;
    var spage = Math.round($(".seriesWrap ul").outerWidth() / $(window).width());

    $(".s-prev-arr").click(function () {
        if (ww > 640 && ww <= 1200) {
            cur--;
            if (cur < 0) cur = spage;

            var pageturn = -1 * cur * sw;
            $(".seriesWrap ul").stop().animate({ "margin-left": 80 + pageturn });

        } else return;

    });
    $(".s-next-arr").click(function () {
        if (ww > 640 && ww <= 1200) {
            cur++;
            if (cur > spage) cur = 0;

            var pageturn = -1 * cur * sw;
            $(".seriesWrap ul").stop().animate({ "margin-left": 80 + pageturn });
        } else return;
    });

});