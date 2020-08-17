$(document).ready(function () {
	console.log('jqyery');
	// $("#Projects").on("click",()=>{
	// 	$("#video-gallery").hide(1000);
	// 	$(".projects").show(1000);
	// })
	// $("#Gallery").on("click",()=>{
	// 	$("#video-gallery").fadeIn(3000);
	// 	$(".projects").hide(1000);
	// })

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
			} else {
				showNav();
			}
			previousScroll = currentScroll;
	});

	function hideNav() {

        $(".navbar").removeClass("scrolling");
        $(".navbar").removeClass('hide');
	}

	function showNav() {
        $(".navbar").removeClass('hide');

		$(".navbar").addClass("scrolling");
	}

});
