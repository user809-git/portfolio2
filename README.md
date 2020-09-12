> *no framework, no Library*

LEGO Korea 레고 코리아
=========

# 📌 About this Portfolio

### 👉 [웹 페이지 보러가기](https://user809-git.github.io/portfolio1/index.html)
### <small>(간단)</small> 작업 설명
- 기존 사이트의 레이아웃 참고 + 내용(& 서브 페이지)
- 세부 콘텐츠 페이지 없음

### 참고 페이지
- [Design Samsung](http://design.samsung.com/kr/)
- [Samchully Asset Management](http://www.sig-fund.com/)

***

## 파일 미리보기
- 📁 css
  - 🅰 (web-font files)
  - 📄 main.css
  - 📄 media.css
  - 📄 nanumsquare.css
  - 📄 style.css
- 📁 img
  - 📷 (images)
- 📁 js
  - 📄 custom.js
  - 📄 jquery-3.4.1.min.js
  - 📄 jquery.easing.1.3.min.js
  - 📄 prefixfree.min.js
- 📁 sub
  - 📁 css
    - 🅰 (web-font files)
    - 📄 reset.css
    - 📄 style0.css
    - 📄 style1.css
    - 📄 style2.css
    - 📄 style3.css
    - 📄 style4_0.css
  - 📁 img
    - 📷 (images)
  - 📁 js
    - 📄 custom1.js
    - 📄 custom3.js
    - 📄 custom4.js
  - 📄 011.html
  - 📄 012.html
  - 📄 013.html
  - 📄 014.html
  - 📄 footer.html
  - 📄 header.html
- 📄 index.html

***
# 👀 Code Self-review
## 효과들

### *.css + *.js
1. 스크롤에 따라 등장   
  👉 jQuery사용   
  👉 scrollTop에 따라 해당하는 요소에 `addClass('up')`   
  👇 custom.js (index.html에 적용)
```js
// 2 contents ---------------------------------------------//

    var windowheight = $(window).height();
    var delayPosition = 100;
    
    $(window).scroll(function() {
        var content2 = $(".contents.under");
        var content3 = $(".contents.third");
        var content4 = $(".contents.fourth");
        var content5 = $(".contents.last");
        var slide = $("#slide");

        // 화면 맨 에서 delaPosition(100)만큼 위를 기준으로 -> position
        var position = $(this).scrollTop() + windowheight - delayPosition;
        
        if(position > content2.offset().top) {
            content2.addClass("up");
        }
        if(position > content3.offset().top) {
            content3.addClass("up");
        }
        if(position > content4.offset().top) {
            content4.addClass("up");
        }
        if(position > content5.offset().top) {
            content5.addClass("up");
        }
        if(position > slide.offset().top) {
            slide.addClass("up");
        }
    });
```

2. 슬라이드 - index.html   
  👉 _not infinite_   
  👉 슬라이드의 처음과 마지막 페이지에서 다음/이전이 없는 화살표는 비활성화 (main.css, custom.js)
```css
/* #next, #prev 기본 opacity: 0.3;*/
#next.active, #prev.active {
    opacity: 0.9;
    display: block;
    cursor: pointer;
}

#slideBox {
    position: relative;
    top: 0;
    width: 100%;
    height: 740px;
    margin: 0 auto;
    overflow: hidden;
    z-index: 10;
}
#slideBox ul {
    position: absolute;
    width: 400%;
}
#slideBox li {
    position: absolute;
    width: 25%; /* ul의 1/4이어야 하기 때문에 (ul의) 25% */
    height: 740px;
    float: left;
}
.news1 {
    background-image: url('../img/news1-1.jpg');
    left: 0;
}
.news2 {
    background-image: url('../img/news2-1.jpg');
    left: 1200px;
}
.news3 {
    background-image: url('../img/news3-1.jpg');
    left: 2400px;
}
.news4 {
    background-image: url('../img/news4-1.jpg');
    left: 3600px;
}
#slideBox > ul > li {
    background-size: cover;
    background-position: center center;
}
```
```js
var slideBox = $("#slideBox>ul");
var news = slideBox.find(">li");
var titles = $(".subTitle");
var next = $("#next");
var prev = $("#prev");

var newsWidth = news.innerWidth();
var slideLength = news.length;

var current = 0;

next.on("click", function(){       
    prev.addClass("active");
    move();
    
    if(current == slideLength-1) {
        next.removeClass();
    }
});
prev.on("click", function(){
    next.addClass("active");
    pre_move();
    
    if(current == 0) {
        prev.removeClass();
    }
});

function move() {
    var n = current+1;
    if(current == slideLength-1) return;
    
    var next1 = -1*n*newsWidth;
    var moveFigure = next1 + "px";
    
    slideBox.stop().animate({"left": next1});
    current = n;
}
function pre_move() {
    var n = current-1;
    if(current == 0) return;
    
    var prev1 = -1*n*newsWidth;
    var moveFigure = prev1 + "px";
    
    slideBox.stop().animate({"left": prev1});
    current = n;
}
```

3. class를 분리하여 원하는 레이아웃으로 볼 수 있도록 (014.html, style4_0.css, custom4.js)   
  👉 default class = list   
  <small>_❓ 왜 container에 class를 한 번만 붙여서 만들지 않았을까..?_</small>
```html
<div id="container">
  <section class="target ready list">
      <!-- 1 -->
      <div class="imgBox">
          <img src="../sub/img/content401.jpg" alt="2020 iF 디자인어워드">
      </div>
      <div class="txtBox">
          <h3>2020 iF 디자인어워드</h3>
          <span>Feb 12, 2020</span>
      </div>
  </section>

...
</div>
```
```css
/* thumnail 썸네일 화면 */
section.thum {
    margin-bottom: 100px;
    width: 49.5%;
    float: left;
    position: relative;
    margin-right: 1%;
    
    transition: 0.3s;
    transition-delay: 0.1s;
}

...

/* list board 리스트 화면 */
section.list {
    width: 100%;
    height: 250px;
    position: relative;
    display: table-row;
 
    transition: 0.3s;
    transition-delay: 0.1s;
}

...
```
```js
var listBtn = $("#howToShow .list_i");
var thumBtn = $("#howToShow .thum_i");

var container = $("#container");
var section = container.find("section");
var sectionList = container.find("section.list");
var sectionThum = container.find("section.thum");

sectionList.each(function(){
    var sLength = section.length;
    var listNum = Math.abs($(this).index() - sLength);
    $(this).prepend("<div class='list_num'>" + listNum + "</div>");
});

listBtn.click(function(){
    
    section.each(function(){
        $(this).removeClass("thum");
        $(this).addClass("list");
    });
    
    $(".list_num").show();
});
thumBtn.click(function(){
    
    section.each(function(){
        $(this).removeClass("list");
        $(this).addClass("thum");
    });
    
    $(".list_num").hide();
});
```


***
## 💬 가장 아쉬운 점, 고쳐야할 점
+ 처음 작성 시 css 적용 순위에 신경쓰지 못하고 만든 점
+ 미디어 쿼리 정리가 안되어 있다.(처음에 미디어 쿼리를 염두해 두고 만들지 않았기 때문에 심지어 파일이 분리되어 있음)
+ js파일도 더 간단하게 작성 할 수 있지 않을까?   
  👉 코드 수정, 파일 정리하기
+ jQuery로만 작성
+ 현재(2020.09) 사파리에서는 index 중간의 스크롤바가 보이지 않는다.(크로스 브라우징에 더 신경쓰자)
+ ! 한 번 지저분하게 만들어 놓은 코드는 수정하거나 덧붙이기도 쉽지 않다.

***

## 👋 [다음 프로젝트로 넘어가기](https://github.com/user809-git/portfolio2)