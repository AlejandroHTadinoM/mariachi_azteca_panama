$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	if (wScroll > $('.navbar').height()) {

		$('#brand-logo').animate({
            width: "64px"
        }, 300);

    } else {
        $('#brand-logo').animate({
            width: "150px"
        }, 300);
    };

    if (wScroll > $('.section__about').offset().top) {
        $('figure > img').animate({
            opacity: 1
        }, 300);
    };

});