import 'slick-carousel';

export default function initSliders() {
	$('#js-related-slider').slick({
		infinite: true,
		speed: 500,
		infinite: false,
		cssEase: 'ease-out',
		slidesToShow: 3,
		prevArrow: $('#js-related-slider').next().find('.js-slider-prev'),
		nextArrow: $('#js-related-slider').next().find('.js-slider-next'),
		responsive: [
	    	{
	        	breakpoint: 768,
	        	settings: {
	        		slidesToShow: 2
	        	}
    		}
    	]
	});
}