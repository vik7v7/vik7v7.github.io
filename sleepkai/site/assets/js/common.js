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




// Фильтр
$(document).ready(function(){	
	 
  /*сладйер диапазаон*/
  $("#slider").slider({
     min: 0,
     max: 30000,
     values: [0,30000],
     range: true
  });
	 
  $("#slider").slider({
    min: 0,
    max: 30000,
    values: [0,30000],
    range: true,
    stop: function(event, ui) {
    $("input#minCost2").val($("#slider").slider("values",0));
    $("input#maxCost2").val($("#slider").slider("values",1));
  },
   slide: function(event, ui){
   $("input#minCost2").val($("#slider").slider("values",0));
   $("input#maxCost2").val($("#slider").slider("values",1));
  }
});
	
$("input#minCost2").change(function(){
  var value1=$("input#minCost2").val();
  var value2=$("input#maxCost2").val();

  if(parseInt(value1) > parseInt(value2)){
	value1 = value2;
	$("input#minCost2").val(value1);
  }
  $("#slider").slider("values",0,value1);	
});

$("input#maxCost2").change(function(){
   var value1=$("input#minCost2").val();
   var value2=$("input#maxCost2").val();
		
   if (value2 > 30000) { value2 = 30000; $("input#maxCost2").val(30000)}

        if(parseInt(value1) > parseInt(value2)){
	     value2 = value1;
	     $("input#maxCost2").val(value2);
	 }
	  $("#slider").slider("values",1,value2);
   });	 
	 
});
// Фильтр
