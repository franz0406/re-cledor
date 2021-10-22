const accodion_ = $(".accodion"), // 아코디언 리스트
      accodionBtn = accodion_.find("button"), // 아코디언 제목
      accodionTxt = accodion_.find("p"); // 아코디언 내용

accodion_.click(function(){

    $(this).find("button").toggleClass("active").next().stop().slideToggle(250);
    $(this).siblings().find("button").removeClass("active").next().stop().slideUp(250);

})
