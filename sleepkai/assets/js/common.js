$(function() {

	

	//SLIDER
		$(document).ready(function(){
			$('.owl-stock').owlCarousel({
			    loop:true,
			    margin:0,
			    navText:["",""],
			    responsive:{
			    0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        992:{
		            items:3
		        },
		        1200:{
		            items:4
		        },
		    	}
			});
		});
	// END SLIDER

	// START SLIDER-ABOUT
		$(document).ready(function(){
			$('.owl-about').owlCarousel({
			    loop:true,
			    margin:0,
			    navText:["",""],
			    responsive:{
			    0:{
		            items:1
		        },
			    600:{
		            items:2
		        },
		        992:{
		            items:3
		        },
		        1200:{
		            items:4
		        },
		    	}
			});
		});
	// END SLIDER-ABOUT

	// START SLIDER-DOCUMENT
		$(document).ready(function(){
			$('.owl-document').owlCarousel({
			    loop:true,
			    margin:0,
			    navText:["",""],
			    responsive:{
		        768:{
		            items:4
		        },
		        1200:{
		            items:6
		        },
		    	}
			});
		});
	// END SLIDER-DOCUMENT

	//advantages
		$(document).ready(function(){
			$('.owl-advantages').owlCarousel({
			    loop:true,
			    margin:0,
			    navText:["",""],
			    responsive:{
			    0:{
		            items:1,
		            autoplay:true
		        },
			    600:{
		            items:2
		        },
		        992:{
		            items:3
		        },
		        1200:{
		            items:4,
		            loop:false
		        },
		    	}
			});
		});
	// END advantages



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

$(document).ready(function(){
	$(".filter-show").click(function(){
		$(".catalog-filter-wrapper").slideToggle();
	});
});


$(document).ready(function() {
 
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth <= 992)$('.result-filter').append( $('.catalog-filter-wrapper') );
    else $('.result-filter').append( $('.filter-e') );
  });
});




$(document).ready(function() {
        $('.popup-document').magnificPopup({
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