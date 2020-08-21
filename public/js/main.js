$(document).ready(function () {
	var scrolllink = $('.scroll');
	scrolllink.click(function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000)
	})

	var previousScroll = 0;
	$(".navbar").addClass('hide');

	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		console.log(currentScroll);
		if (currentScroll > 450) {
			console.log('ented here');
			showNav();
		}

		if (currentScroll < 100) {
			hideNav();
		}
		previousScroll = currentScroll;
	});

	function hideNav() {

		$(".main-navbar").removeClass("scrolling");
		$(".main-navbar").removeClass('hide');
	}

	function showNav() {
		$(".main-navbar").removeClass('hide');

		$(".main-navbar").addClass("scrolling");
	}

});
