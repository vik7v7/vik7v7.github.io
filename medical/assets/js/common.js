$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//START ПОДПИСАТЬСЯ НА РАССЫЛКУ НОВОСТЕЙ И АКЦИЙ
	$("form#subscribe").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/subscribe.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#exampleModal').arcticmodal();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	//END ПОДПИСАТЬСЯ НА РАССЫЛКУ НОВОСТЕЙ И АКЦИЙ

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	//Chrome Smooth Scroll
	
});


//Loader
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
//Loader


//MENU
		(function($){
		$(document).ready(function(){

		$('#cssmenu li.active').addClass('open').children('ul').show();
			$('#cssmenu li.has-sub>a').on('click', function(){
				$(this).removeAttr('href');
				var element = $(this).parent('li');
				if (element.hasClass('open')) {
					element.removeClass('open');
					element.find('li').removeClass('open');
					element.find('ul').slideUp(200);
				}
				else {
					element.addClass('open');
					element.children('ul').slideDown(200);
					element.siblings('li').children('ul').slideUp(200);
					element.siblings('li').removeClass('open');
					element.siblings('li').find('li').removeClass('open');
					element.siblings('li').find('ul').slideUp(200);
				}
			});

		});
		})(jQuery);

		$(document).ready(function(){
			$(".icon-menu").click(function(){
				$("nav #cssmenu").slideToggle();
			});
		});
// END MENU

//START PORTFOLIO
$(document).ready(function(){
	$('.owl-portfolio-img').owlCarousel({
	    center: true,
	    items:1,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
		autoplayHoverPause:false,
	});
});
//END PORTFOLIO

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