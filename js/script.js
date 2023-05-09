$(function(){
  //banner part slider
  $('.banner-slide').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplay: true,
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    
  });
  // quotes part slider
$('.quotes-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplay: true,
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    
  });

// mix it up part
 var mixer = mixitup('.mixitup-images');
 var images = document.querySelectorAll('.images');
 var btn = document.querySelector('.btn'); 

//  var currentimg = 12
//  btn.addEventListener('click',function(){
//    for(var i=currentimg; i<currentimg + 6; i++){
//     if(images[i]){
//       images[i].style.display = 'inline-block';
//     }
//    }
//    currentimg += 6;
//    if(currentimg>=images.length){
//        Event.target.style.display='none';
//    }
//  })
})
 