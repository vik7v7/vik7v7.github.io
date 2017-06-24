$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form#form-idea").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail/form-idea.php", //Change
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

	$("form#form-comand").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail/form-comand.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#exampleModalcont').arcticmodal();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
