$(document).ready(function(){
	var span = $('div').find('span');
	span.each(function(index, element) {
		if(index % 2 == 0) {
			$(element).css('color', 'red');
		}
	});
};