$(document).ready(function() {


/*this for adding class active to links */
    $('span').click(function() {
            $('.overlay').toggleClass('anim');
        });

        $('.animation').click(function(){
            $('.anim').toggleClass('reverse-animation');
        })
   
/*this for scrolling all nav li*/
$('nav ul li:nth-of-type(1)').click(function() {
          $('html, body').animate({
      scrollTop: ($('header').offset().top)
      },1500);
      });
   $('nav ul li:nth-of-type(2)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about').offset().top + 50)
      },1500);
      });

   $('nav ul li:nth-of-type(3)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.som-info').offset().top - 100 )
      },1500);
      });

   $('nav ul li:nth-of-type(4)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.team-info').offset().top + 20 )
      },1500);
      });
   $('nav ul li:nth-of-type(5)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.service').offset().top + 20 )
      },1500);
      });
   $('nav ul li:nth-of-type(6)').click(function() {
          $('html, body').animate({
      scrollTop: ($('footer').offset().top )
      },1500);
      });
      });

// this for scroll down from header to about div 
 $('header .down button').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about').offset().top )
      },1500);
      });


//this for page louding  when started or relouded
$( window ).on( "load", function() {
        $('.main-load').fadeOut(1000);
         $('.spinner').fadeOut(1000);
             $('body').css('overflow','auto');
     });

  //end all js style  