$(function(){

    var carousel = $("#carousel"),
    carouselList = $("ul.photos"),
    carouselDots = $("ul.dots");

    carouselList.find("li").each(function(){
        carouselDots.append("<li></li>");
    });

    var dot = carouselDots.find("li");
    dot.first().addClass("active");

    dot.click(function(){
        target = $(this).index();
        changeSlide(target);
    });

    function changeSlide(target) {
        carouselList.stop().animate({"left": -800 * target});
        dot.removeClass("active").eq(target).addClass("active");
    }

    var left = $(".left"),
    right = $(".right");

    left.click(function(){
        target = dot.siblings('.active').index();
        target == 0 ? target = dot.length - 1 : target -= 1;
        changeSlide(target);
    });

    right.click(function(){
        target = dot.siblings('.active').index();
        target == dot.length - 1 ? target = 0 : target += 1;
        changeSlide(target);
    });

    function autoSlide(target){
       target = dot.siblings('.active').index();
       target == dot.length - 1 ? target = 0 : target += 1;

       carouselList.stop().animate({"left": -800 * target},1000);
       dot.siblings('.active').removeClass('active').next().addClass('active');
       
       target = dot.siblings('.active').index();
       if (target == -1){
         dot.siblings('.active').removeClass('active');
         dot.first().addClass('active');
       }
    };

    setInterval(autoSlide, 4000);
});