const percentBox = document.querySelector(".percent-box"), // 퍼센트 박스
      subTitle = document.querySelector(".sub-title"), // 서브 타이틀 텍스트
      pointBox = document.querySelectorAll(".cledor-point"), // 포인트 박스
      subTitle_p = document.querySelector(".brand-contents > p:nth-of-type(3)"), // 서브 타이틀 밑 p 태그
      percentText = document.querySelectorAll(".percent-num"), // 퍼센트 텍스트
      NUM_ = 600;
      
let flag = true;
      
function NumChange(idx){ // 숫자 애니메이션 함수
    var percentNum = 0; // 숫자 초기값
    var percentValue = percentText[idx].getAttribute("data-num"); // 퍼센트 값 가져오기
    
    var numCount = setInterval(function(){ // 자동 함수
        ++percentNum;
        percentText[idx].innerText = `${percentNum}%`;
        if(percentNum == percentValue) clearInterval(numCount);
    },20);
};




window.addEventListener("scroll", function(){  // 스크롤 이벤트
    let scrlTop = window.scrollY;

    if(scrlTop > percentBox.offsetTop - NUM_){
        percentBox.classList.add("show");
        if(flag){
        for(let i = 0; i < percentText.length; i++){
            NumChange(i);
        };
        flag = false;
    }
    }
    
    if(scrlTop > subTitle.offsetTop - NUM_){
        subTitle.classList.add("show");
    }

    if(scrlTop > subTitle_p.offsetTop - NUM_){
        subTitle_p.classList.add("show");
    }

    if(scrlTop > pointBox[0].offsetTop - NUM_){
        pointBox[0].classList.add("show");
    }

    if(scrlTop > pointBox[1].offsetTop - NUM_){
        pointBox[1].classList.add("show");
    }

    if(scrlTop > pointBox[2].offsetTop - NUM_){
        pointBox[2].classList.add("show");
    }

    if(scrlTop > pointBox[3].offsetTop - NUM_){
        pointBox[3].classList.add("show");
    }
});

