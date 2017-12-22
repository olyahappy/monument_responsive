//when you click on hamburger icon(.hamburger)
$('.hamburger').on('click', function (event) {
	// slide toggle the menu down (#dropdown)//
	event.preventDefault();
	$("#dropdown").toggle();
});
