$(document).ready(function(){

    $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").mouseover(function(){

        let indexNum = $(this).index()
        $(this).addClass("active")
        // $(this).siblings().removeClass("active")
    })
    $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").mouseleave(function(){
        $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").removeClass("active")
    })


    $(".slide").slick({

        autoplay : true ,
        autoplaySpeed : 0 ,
        speed: 12000,
        cssEase: "linear" ,
        arrows: false ,
        pauseOnHover: false ,
        slideToShow: 1,
    })

    $(".slider").slick({
        autoplay : false ,
        slidesToShow: 3,
        slidesToScroll: 3,
      })

})