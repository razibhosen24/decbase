



// js start


// aos start
AOS.init({
  duration: 800,
})
// aos end


// js end


// jq start 

$(document).ready(function(){


// prlder start
$('.js-preloader').preloadinator({

  animation: 'fadeOut',
  animationDuration: 1000,
  minTime: 2000,
  scroll:false

});
// prlder end


// scrlltotop
var $button = $.backToTop({

    // background color
    backgroundColor: '#37806B',

    // text color
    color: '#FFFFFF',

     // icon
    icon: 'fas fa-chevron-up',

     // width/height of the back to top button
    height: 30,  
    width: 30,          

    // trigger position
    pxToTrigger: 600,
    
});
// scrlltotop

// slick start
$('.srvc-sldr').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },

    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
  ]


  });
// slick end

// rcounterup strt
$(function(){
  $('.count-num').rCounter({
    duration: 30
  });
});
// rcounterup end

// slick start
$('.tstmnl-sldr').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 32,

  responsive: [
      {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },

    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
  ]


  });
// slick end





}); 
// jq end  



