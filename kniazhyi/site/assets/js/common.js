$(function() {

	// START gallery
	$(document).ready(function() {
	        $('.popup-gallery').magnificPopup({
	          delegate: 'a',
	          type: 'image',
	          tLoading: 'Loading image #%curr%...',
	          mainClass: 'mfp-img-mobile',
	          gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	          },
	          image: {
	            tError: '',
	            titleSrc: function(item) {
	              return item.el.attr('title');
	            }
	          }
	        });
	});
	// END gallery

	// START Плавное появление елементов в хедере

		var duration = 1200; //'slow'
		$(".header-element").each(function(index) {
		    $(this).delay(duration * index).fadeIn(duration);
		});

	// END Плавное появление елементов в хедере

	// START Меню

		$(".menu-toggle").on('click', function() {
		  $(this).toggleClass("on");
		  $('.menu-section').toggleClass("on");
		  $("nav ul").toggleClass('hidden');
		});

		$("nav ul li").on('click', function() {
		  $('.menu-section').removeClass("on");
		  $('.menu-toggle').removeClass("on");
		  $("nav ul").toggleClass('hidden');
		});

	// END Меню

		

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
