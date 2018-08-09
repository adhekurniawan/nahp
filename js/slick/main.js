
$('.slider-for').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: true,
	pauseOnFocus: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
	e.preventDefault();
	var slideno = $(this).data('slide');
	$('.slider-nav').slick('slickGoTo', slideno - 1);
});