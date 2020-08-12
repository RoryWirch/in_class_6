$(function() {
	$('ul').before("<p>Just Updated</p>");

	$('li.hot').each(function() {
		$(this).prepend("+ ");
	})

	var newLi = document.createElement('li');
	var liText = document.createTextNode(" soy sauce");

	var emEl = document.createElement('em');
	var emText = document.createTextNode("gluten-free");
	emEl.appendChild(emText);

	newLi.appendChild(emEl);

	newLi.appendChild(liText);

	$('li').last().after(newLi);



});
