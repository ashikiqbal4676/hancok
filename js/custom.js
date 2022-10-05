$(function(){



// popular-slick 
$('.one').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:".next",
    prevArrow:".prev"
  });

// vedio-slick 
$('.vedio-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },

  ]

  });

  // cetagori-slick 

$('.cetagori-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical:true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  });

  // prov-slick
$('.prov-slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:".a",
    prevArrow:".b",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
  
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
  
        }
      },
  
    ]

  });

// preloder-js 
 $(window).load(function(){
    $('#preloader').delay(5000).fadeOut(200, function() {
          $('body').css('overflow','visible');
          $(this).remove();
       });

      // back to top 
      $(" .backto-top i").click(function(){

        $('html,body').animate({
          scrollTop:0,
      
        })
      })

      $(window).scroll(function(){
      
        var scrolling = $(this).scrollTop()
        if(scrolling > 20 ){
          $(".backto-top i").fadeIn(500)
        }else{
          $(".backto-top i").fadeOut(500)
        }
      
        if(scrolling > 50 ){
          $(".menu-bg").addClass("nav-bg")
        }else{
          $(".menu-bg").removeClass("nav-bg")
        }
      
      })



      // counter-js 
      $('.counter').counterUp({
        delay: 100,
        time: 5000
    });


    // aso-js 
    AOS.init();

    // cursor-js 
    var kursorx = new kursor({
      type: 1,
      removeDefaultCursor: false,
      color:"#ecfb00"
    })




  });























})