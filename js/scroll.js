const percentBox = document.querySelector(".percent-box"), // 퍼센트 박스
      subTitle = document.querySelector(".sub-title"), // 서브 타이틀 텍스트
      pointBox = document.querySelectorAll(".cledor-point"), // 포인트 박스
      subTitle_p = document.querySelector(".brand-contents > p:nth-of-type(3)"), // 서브 타이틀 밑 p 태그
      offset = 600;


window.addEventListener("scroll", function(){  // 스크롤 이벤트
    let scrlTop = window.scrollY;

    if(scrlTop > percentBox.offsetTop - offset){
        percentBox.classList.add("show");
    }
    
    if(scrlTop > subTitle.offsetTop - offset){
        subTitle.classList.add("show");
    }

    if(scrlTop > subTitle_p.offsetTop - offset){
        subTitle_p.classList.add("show");
    }

    if(scrlTop > pointBox[0].offsetTop - offset){
        pointBox[0].classList.add("show");
    }

    if(scrlTop > pointBox[1].offsetTop - offset){
        pointBox[1].classList.add("show");
    }

    if(scrlTop > pointBox[2].offsetTop - offset){
        pointBox[2].classList.add("show");
    }

    if(scrlTop > pointBox[3].offsetTop - offset){
        pointBox[3].classList.add("show");
    }
})
