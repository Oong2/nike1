$(document).ready(function(){

    $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").mouseover(function(){

        let indexNum = $(this).index()
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
        
        // if( $(this).hasClass("active") ){
        //     $(this).siblings().removeClass("active")
        // }
        
        $(".top-menu-wrap > .top-menu > .depth-wrap > .depth").eq(indexNum).addClass("active")
    })
    $(".top-menu-wrap > .top-menu > .top-menu-mid > ul > li").mouseleave(function(){
        
        
        // let indexNum = $(this).index()
        // $(this).removeClass("active")
        
        // $(this).siblings().removeClass("active")
        
        })

    $(".top-menu-wrap > .top-menu > .depth-wrap > .depth").mouseleave(function(){

        
        let indexNum = $(this).index()

                if( $(".top-menu-wrap > .top-menu > .depth-wrap > .depth").hasClass("active") ){
            $(".top-menu-wrap > .top-menu > .depth-wrap > .depth").siblings().removeClass("active")
        }
        $(".top-menu-wrap > .top-menu > .depth-wrap > .depth").removeClass("active")
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