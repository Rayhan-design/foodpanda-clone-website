$(document).ready(function(){
    // scroll top button 
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
          $("#scroll-up-btn").fadeIn()
        }else{
          $("#scroll-up-btn").fadeOut()
        }
      })

})