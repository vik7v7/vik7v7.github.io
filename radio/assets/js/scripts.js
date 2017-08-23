$(function() {


	$(document).ready(function(){
		$(".icon-menu").click(function(){
			$("nav ul").slideToggle();
		});
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form#form-number2").submit(function() { //Change
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

	$("form#form-number").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/cart.php", //Change
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

});
