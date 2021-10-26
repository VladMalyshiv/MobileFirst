$(function(){
	$('.top-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow:'<button type="button" class="slick-next"><img src="images/back.svg"></button>',
		prevArrow:'<button type="button" class="slick-prev"><img src="images/forward.svg"></button>',
		 responsive: [
		   {
		 	breakpoint: 1024,
		 	settings: {
		 	  slidesToShow: 1,
		 	  slidesToScroll: 1,
		 	}
		   },
		   {
		 	breakpoint: 639,
		 	settings: {
				arrows: false
			}
		   },
		  {
		 	breakpoint: 320,
		 	settings: {
				
		 	}
		  }

		]
	  });
	  $('.testimonial_slider').slick({
		dots:true,
		infinite:false,
		arrows:false,
		dotsClass:'slick_dots-bot'
	  });
});

