$(document).ready(function(){

    $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").mouseover(function(){
        $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").addClass("active")
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

})