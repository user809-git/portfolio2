LEGO Korea 레고 코리아
=========

# 📌 About this Portfolio

### 👉 [웹 페이지 보러가기](https://user809-git.github.io/portfolio2/index.html)
### <small>(간단한)</small> 작업 과정
- 원본 페이지의 콘텐츠 그룹화, 정리
- 컨셉에 맞춘 레이아웃 구조 + 세부 영역 디자인 (PC기준)
- 디자인에 맞춰 html, css, js 문서 작성
- 미디어 쿼리 작성
- 오류 수정, 크로스 브라우징

### 원본 페이지
- [LEGO® Shop Korea](https://www.lego.com/ko-kr)

***

## 파일 미리보기
- 📁 css
  - 📄 basic.css
  - 📄 category.css
  - 📄 login.css
  - 📄 main.css
  - 📄 offers.css
  - 📄 product.css
  - 📄 reg.css
  - 📄 style.css
  - 📄 support.css
  - 📄 swiper.min.css
  - 📄 vip.css
- 📁 img
  - 📷 (images)
- 📁 js
  - 📄 custom.js
  - 📄 jquery-3.4.1.min.js
  - 📄 jquery.easing.1.3.min.js
  - 📄 offers.js
  - 📄 prefixfree.min.js
  - 📄 product.js
  - 📄 reg.js
  - 📄 support.js
  - 📄 swipper.min.js
  - 📄 vip.js
- 📁 sub
  - 📁 img
    - 📷 (images)
  - 📄 footer.html
  - 📄 header.html
- 📄 Category.html
- 📄 Login.html
- 📄 NewProduct.html
- 📄 Offers.html
- 📄 Reg.html
- 📄 Support.html
- 📄 Vip.html
- 📄 index.html

***
# 👀 Code Self-review
## index.html에 사용된 효과들

### 1. 슬라이드 - swiper.js
  👉 모바일에서도 쉽게 넘길 수 있도록 swiper.js 이용   
```js
<script src="js/swiper.min.js"></script>
<script>
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function(){
                $('.swiper-slide').find('.ani').removeClass("Fa");
                $('.swiper-slide-active').find('.ani').addClass("Fa");
            }
        }
    });
</script>
```
### 2. 마우스 커서 움직에 따른 요소 움직임
  👉 슬라이드의 각 페이지 마다 다른 아이템들이 등장, 마우스의 움직에 따라 반응
```js
// 슬라이드의 아이템들
// 마우스 커서가 슬라이드 영역 위에 있을 떄만 움직이도록 함

mainVisual.on("mousemove",function(e){

    // 변수에 마우스 커서의 x축, y축 위치 저장
    var posX = e.pageX / 2;
    var posY = e.pageY / 2;

    $(".titleBox1").css({"left":210+(posX/10), "top":400+(posY/10) });
    $(".sImg11").css({"left":20+(posX/6), "top":20+(posY/3) });
    $(".sImg12").css({"right":130+(posX/6), "bottom":-40+(posY/3) });

    $(".titleBox2").css({"left":260+(posX/9), "top":520+(posY/10) });
    $(".sImg21").css({"left":470+(posX/5), "top":180+(posY/3) });
    $(".sImg22").css({"left":380+(posX/9), "top":200+(posY/7) });
    $(".sImg23").css({"right":220+(posX/5), "top":200+(posY/5) });

    $(".titleBox3").css({"right":210+(posX/11), "top":310+(posY/9) });
    $(".sImg31").css({"left":210+(posX/6), "bottom":30+(posY/6) });
    $(".sImg32").css({"left":490+(posX/3), "bottom":100+(posY/5) });
    $(".sImg33").css({"right":200+(posX/5), "bottom":270+(posY/5) });

    $(".titleBox4").css({"left":450+(posX/7), "top":570+(posY/10) });
    $(".sImg41").css({"right":-20+(posX/5), "top":-80+(posY/3) });
});
```

### 3. 패럴랙스 효과 (index.html)  
  👉 jQuery사용   
  👉 패럴랙스로 움직여야 하는 요소들(각 박스의 타이틀, 내용 등)을 각자 조절   
```js
// 콘텐츠 박스 scroll-parallax

// 각 콘텐츠 영역의 타이틀과 내용 박스
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

$(window).scroll(function(){
    
    var value = $(this).scrollTop() + wh/2;
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
    
    $(".eventBox .contTit").stop().animate({"top": move1*0.5});
    $(".eventBox .eventWrap").stop().animate({"top": move1+5});

    $(".categBox .contTit").stop().animate({"top": move2*0.5});
    $(".categBox .categWrap").stop().animate({"top": move2+5});

    $(".hotiBox .contTit").stop().animate({"top": move3*0.5});
    $(".hotiBox .hotiWrap").stop().animate({"top": move3+7});

    $(".seriesBox .contTit").stop().animate({"top": move4*0.5});
    $(".seriesBox .seriesWrap").stop().animate({"top": move4+5});
    $(".s-prev-arr").stop().animate({"top": 115+move4*0.2});
    $(".s-next-arr").stop().animate({"top": 115+move4*0.2});
    
    $(".spotlBox .contTit").stop().animate({"top": move5*0.5});
    $(".spotlBox .spotlWrap").stop().animate({"top": move5-2});
    
});
```



***
## 💬 가장 아쉬운 점, 고쳐야할 점
+ 같은 구조로 있는 요소들을 한꺼번에 저장해서 움직일 수 있을 것도 같은데...🤔
+ index.html에만 기능들이 너무 몰려있는 것 같기도 하다.

***

## 👈 [이전 프로젝트 보기 -> Design Samsung](https://github.com/user809-git/portfolio1)
## 👋 [다음 프로젝트로 넘어가기 (팀프로젝트)](https://github.com/user809-git/portfolioA)