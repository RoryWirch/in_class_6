$(function() {
	// found on stack overflow
	// https://stackoverflow.com/questions/7321896/jquery-find-element-by-text
	$('li:contains("pine")').text("almonds");

	$('li#one').remove();

	// change multiple html elements
	// https://stackoverflow.com/questions/21067371/jquery-each-is-only-changing-the-first-element
	$('li.hot').each(function() {
		var textContent = $(this).text();
		console.log(textContent);
		$(this).html('<em>' + textContent + '</em>');
	});

});
