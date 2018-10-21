$(function() {
	$('body').fadeIn(1200);
	$('p').hide();

	$('button').click(function() {
		var paragraph = $('p');
		var isVisible = paragraph.is(":visible");

		if(isVisible) {
			paragraph.fadeOut("slow");
		} else {
			paragraph.fadeIn("fast");
		}
	});
});