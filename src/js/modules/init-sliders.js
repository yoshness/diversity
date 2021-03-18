import 'slick-carousel';

export default function initSliders() {
	if ($(window).width() >= 768) {
		$('#js-related-slider').slick({
			infinite: true,
			speed: 500,
			infinite: false,
			cssEase: 'ease-out',
			slidesToShow: 3,
			prevArrow: $('#js-related-slider').next().find('.js-slider-prev'),
			nextArrow: $('#js-related-slider').next().find('.js-slider-next')
		});
	}
}