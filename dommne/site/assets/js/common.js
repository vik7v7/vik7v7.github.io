$(function() {

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
			    nav:true,
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
