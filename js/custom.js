
// Preloader
$(window).on('load', function() {
  $('.preloader-area').fadeOut();
});

// magnified iframe
$('.eposide-item').magnificPopup({
    type: 'iframe',
    delegate: 'a',
    gellary: {enabled: true},
    zoom: {
        enabled: true,
        duration: 400,
        easing: 'ease-in-out',
    },
    
  });
$('.admmission-img').magnificPopup({
    type: 'iframe',
    delegate: 'a',
    gellary: {enabled: true},
    zoom: {
        enabled: true,
        duration: 400,
        easing: 'ease-in-out',
    },
    
  });


// banner-slider
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    thumbs:false,
    smartSpeed:1000,
    navText: ["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
    // autoplay:true,
    autoplayTimeout:6666,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// humburder-menu
$('.humburger').click(function(){
    $('.sidebar-menu').toggleClass('menuActive');
    $('.sidebar-menu').removeClass('menuClose')
})
$('.sidebar-clos').click(function(){
    $('.sidebar-menu').toggleClass('menuClose');
    $('.sidebar-menu').removeClass('menuActive');
})

// counter up
$('.counter').counterUp({
              delay: 10,
                time: 2000
});

// topmenu
// $('.top').hide();
$(window).scroll(function(){
    let tobbar = $(document).scrollTop();
    if(tobbar>200){
        $('.go-top').addClass('show')
    } else {
        $('.go-top').removeClass('show')
    }

})

// aos animate
AOS.init();


// responsive menubar

$('.menu-icon').click (function(){
    $('.menu-icon').toggleClass('open');
  })
  $('.menu-icon').click (function(){
    $('.menu-item').slideToggle('500');
  })
  
  
  $('#dropdown-link').click (function(){
    $(this).toggleClass('active')
  })
  
  $('#dropdown-link').click (function(){
    $('.dropdown-item').slideToggle('500')
  })
  
  $('#dropdown-link-2').click (function(){
    $(this).toggleClass('active')
  })
  $('#dropdown-link-2').click (function(){
    $('.dropdown-item-2').slideToggle('500')
  })


  // Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('nav').addClass("sticky");
		}
		else{
			$('nav').removeClass("sticky");
		};
	});

  $(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.menu-bar').addClass("sticky");
		}
		else{
			$('.menu-bar').removeClass("sticky");
		};
	});

  // odometer
  $('.odometer').appear(function(e) {
    var odo = $(".odometer");
    odo.each(function() {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
    });
});







// https://templates.hibootstrap.com/sanu/default/campus-life.html