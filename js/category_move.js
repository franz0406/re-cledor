const lnbSection = document.querySelector(".product-nav"), // lnb 섹션
      categoryBtn = document.querySelectorAll(".lnb > ul > li"), // lnb 리스트
      productSection = document.querySelectorAll(".cledor-product"), // 제품 섹션
      btnLenth = categoryBtn.length; // lnb 리스트 개수


const category = document.querySelector(".lnb"), // 카테고리      
      cledorHeader = document.querySelector("header"); // 헤더
      
var getHeadHeight = cledorHeader.offsetHeight; // 헤더 높이 값 가져오기
var categoryTop = category.offsetTop; // 카테고리 현제 위치에서 상단까지의 거리
var sectionIdx = 0; // 공통으로 사용할 idx 
var stickyPos = categoryTop - getHeadHeight*2;


window.addEventListener("resize", function(){ 
    getHeadHeight = cledorHeader.offsetHeight;
    categoryTop = category.offsetTop;
    stickyPos = categoryTop - getHeadHeight*2; 
})

window.addEventListener("scroll", function(){ // 스크롤 이벤트

    if(document.documentElement.scrollTop >= categoryTop - getHeadHeight){ // lnb 클래스 추가
        category.classList.add("fix");
        lnbSection.classList.add("fix");
        lnbSection.style.top = "-"+stickyPos+"px";
    } else {
        category.classList.remove("fix");
        lnbSection.classList.remove("fix");
    }
})

categoryBtn.forEach(function(elem, idx){ // 카테고리 제품 리스트 클릭 이벤트
    categoryBtn[idx].addEventListener("click", function(e){
        e.preventDefault(); // 기본 이벤트 중지
        sectionIdx = idx; // 클릭 요소 idx 값 가져오기
        var getOffsetTop = productSection[sectionIdx].offsetTop; // 제품섹션 요소 위치에서 상단까지 거리
        window.scrollTo({top:getOffsetTop, behavior:"smooth"}); // 위치로 이동 
        
        for(var i = 0; i < btnLenth; i++){
            categoryBtn[i].classList.remove("active");
        };
        categoryBtn[idx].classList.add("active");
    })
})

