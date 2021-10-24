const toTopBtn = document.querySelector(".to-top"), // 위로가기버튼
      ScrllHeight = window.document.documentElement.scrollHeight, // 문서 전체 높이
      devideHeight = ScrllHeight / 4; // 문서 전체 높이 4분의1 값

      
window.addEventListener("scroll",function(){ // 스크롤 이벤트
    let scrlTop = window.scrollY; // 스크롤 양
    
    if(scrlTop > devideHeight){ // 현재 스크롤 양이 문서 전체 높이 4분의1 값 보다 크면
        toTopBtn.classList.add("active"); // active 클레스 추가
    } else {
        toTopBtn.classList.remove("active"); // active 클레스 제거
    }
})

toTopBtn.addEventListener("click", function(e){ // 위로가기버튼 클릭 이벤트
    e.preventDefault(); // 기본 이벤트 효과 제거
    document.body.scrollIntoView({behavior:"smooth"}); // 클릭시 최상단으로 이동
})