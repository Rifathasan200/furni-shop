
$(window).scroll(function(){
  console.log($(window).scrollTop())

  if($(window).scrollTop() >300){
$(".menu").addClass("nav-scroll")
  }else{
      $(".menu").removeClass("nav-scroll") 
  }



  if($(window).scrollTop() >600){
    $(".top-button") .fadeIn()
        }else{
          $(".top-button") .fadeOut()
        }

})


$(".banner-slider").slick({
    vertical:true,
    prevArrow: '<i class="fa-solid fa-angle-up prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-down next"></i>',



    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right next"></i>'
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]


})

$(".brand-slider").slick({
    slidesToShow:5,
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    autoplay:true,
    autoplaySpeed:2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          // prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
          // nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
         
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

})

            var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

            var mixer = mixitup(containerEl, {
                selectors: {
                    target: '[data-ref~="mixitup-target"]'
                }
            });


            $(".client-slider").slick({
                prevArrow: '<i class="fa-solid fa-arrow-left-long prev"></i>',
                nextArrow: '<i class="fa-solid fa-arrow-right-long next"></i>'
            })     
            
            
            $(".bottom-button").click(function(){
              $("html,body").animate({
                scrollTop:$(document).height()
              },1000)
            })


            $(".top-button").click(function(){
              $("html,body").animate({
                scrollTop:0
              },1000)
            })

        