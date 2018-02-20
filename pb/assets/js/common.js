$(function() {

	//START Оставьте свои контакты и мы с Вами свяжемся
	$("form#form-your-sell-buy").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/your-sell-buy.php", //Change
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
	//END Оставьте свои контакты и мы с Вами свяжемся

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

	//START НЕ НАШЛИ ТО ИСКАЛИ
	$("form#no-search").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/no-search.php", //Change
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
	//END НЕ НАШЛИ ТО ИСКАЛИ

	//START Оставить заявку page
	$("form#send-platform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/send-platform.php", //Change
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
	//END Оставить заявку page

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

	//SLIDER
		$(document).ready(function(){
			$('.owl-slider').owlCarousel({
			    loop:true,
			    margin:0,
			    autoplay:true,
			    navText:["",""],
			    responsive:{
		        0:{
		            items:1
		        },
		        765:{
		            items:1
		        },
		        1200:{
		            items:1
		        },
		    	}
			});
		});
	// END SLIDER

	//START partners
	$(document).ready(function(){
		$('.owl-partners').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    autoplay:true,
		    navText:["",""],
		    responsive:{
		    0:{
	            items:1
	        },
	        500:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        920:{
	            items:4
	        },
	    	}
		});
	});
	// END partners

	//START Заявка продать сдать в аренду
	$("a[href='#bottom-your-sell-buy']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	// END Заявка продать сдать в аренду

	//START Подписаться на рассылку
	$("a[href='#form-mail-send']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	// END Подписаться на рассылку

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


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