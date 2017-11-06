$(function() {

	// __________________________________ START MENU ___________________________________

	$(document).ready(function(){
		$(".icon_menu").click(function(){
			$("nav .accordion").slideToggle();
			$(".block-bg").slideToggle();
		});
	});

	$(document).ready(function(){
		$(".nav-i-left").click(function(){
			$(".block-left").slideToggle();
		});
	});

	$(".arrow").click(function() {
		$("html, body").animate({
			scrollTop : $(".direct-project").offset().top
		}, 800);
	});


	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
	// __________________________________ END MENU ___________________________________

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


	

});

//SLIDER
$(document).ready(function(){
	$('.owl-trust').owlCarousel({
	    center: true,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
        0:{
            items:1
        },
        480:{
            items:3
        },
    	}
	});
});

//GALERY
$(document).ready(function(){
	$('.owl-gallery').owlCarousel({
	    center: true,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
        0:{
            items:1
        },
        480:{
            items:3
        },
    	}
	});
});

//PARNTERS
$(document).ready(function(){
	$('.owl-partners').owlCarousel({
	    center: true,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
	    0:{
            items:1,
            center: false,
        },
        480:{
            items:3
        },
        680:{
            items:5
        },
    	}
	});
});


var owl = $('.owl-gallery');
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



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
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });
      });




//youtube-link
$('.youtube-link').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: function(url) {        
                    var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                    if ( !m || !m[1] ) return null;
                    return m[1];
                },
                src: '//www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
                index: 'vimeo.com/', 
                id: function(url) {        
                    var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                    if ( !m || !m[5] ) return null;
                    return m[5];
                },
                src: '//player.vimeo.com/video/%id%?autoplay=1'
            }
        }
    }
});


//REVIEW
$(document).ready(function(){
	$('.owl-review').owlCarousel({
	    center: true,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        680:{
            items:3
        },
    	}
	});
});


