const userBtn = document.querySelector(".user-btn"); // 유저아이콘
const menuBtn = document.querySelector(".menu-btn"); // 메뉴아이콘
const headerUtilMenu = document.querySelector("header dl"); // 헤더 유팅 메뉴 
const headerNav = document.querySelector(".h-menu-wrapper"); // 헤더 네비게이터
const closeBtn = headerUtilMenu.querySelector("dd:last-of-type");
console.log(menuBtn)

userBtn.addEventListener("click", function(){ // 유저아이콘 클릭시 유틸메뉴 생성
    headerUtilMenu.classList.add("active");
});

menuBtn.addEventListener("click", function(){ // 유저아이콘 클릭시 유틸메뉴 생성
    headerNav.classList.add("active");
});

closeBtn.addEventListener("click", function(){ // 유저아이콘 클릭시 유틸메뉴 제거
    headerUtilMenu.classList.remove("active");
    headerNav.classList.remove("active");
});
