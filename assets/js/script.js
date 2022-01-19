(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		headerHeightFixer();
		$(".banner__animation__video").get(0).play();
    });
	/* Document on Resize functions */
	$(window).on('resize', function () {
		headerHeightFixer();
    });

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
	$(document).ready(function () {
		$('header').before('<div class="header-height-fix"></div>');
	});
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').outerHeight() +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

    /*  Banner slider */
    // $(".banner__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     speed: 500,
    //     arrows: true,
    //     prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
	// 	nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
    //     dots: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     infinite: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				dots: true
	// 			}
	// 		},
	// 	]
    // });

    /* veno box */
    $('.venobox').venobox({
        bgcolor    : '#ffffff',
        spinner    : 'three-bounce',
    });

})(jQuery);