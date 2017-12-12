$(function() {

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
			url: "/mail.php", //Change
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


//SLIDER
$(document).ready(function(){
	$('.owl-one').owlCarousel({
	    center: true,
	    items:1,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		animateOut: 'fadeOut',
	});
});

//SLIDER-PARTNERS
$(document).ready(function(){
	$('.owl-partners').owlCarousel({
	    items:4,
		autoplayHoverPause:false,
		loop:true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    	}
	});
});


//EVENT
$(document).ready(function(){
	$('.owl-event').owlCarousel({
	    center: true,
	    items:1,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:["",""],
	    autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:false,
	});
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

//heading
$(function(){
var a = new String;
a = $('.text_cont_inner').text();
$('.text_cont_inner').text('');
var c=a.length;
j=0;
setInterval(function(){
if(j<c){
$('.text_cont_inner').text($('.text_cont_inner').text()+a[j]);
j=j+1; 
} 
else {$('.text_cont_inner').removeClass('after')} 
},150);
});


