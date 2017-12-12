$(function() {

	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-adv").offset().top
		}, 800);
	});


	$("a[href='#bottom-coock']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});


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


	$(document).ready(function(){
		$("nav").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form#contact").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail/mail.php", //Change
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

//coock
$(document).ready(function(){
	$('.owl-coock').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
        0:{
            items:1
        },
        765:{
            items:2
        },
        1200:{
            items:3
        },
    	}
	});
});

//banket-room
$(document).ready(function(){
	$('.owl-banket-room').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
        0:{
            items:1
        },
        765:{
            items:1
        },
        1200:{
            items:2
        },
    	}
	});
});


//register
$(document).ready(function(){
	$('.owl-register').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
        0:{
            items:1
        },
        765:{
            items:2
        },
        1200:{
            items:3
        },
    	}
	});
});

//partners
$(document).ready(function(){
	$('.owl-partners').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
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
