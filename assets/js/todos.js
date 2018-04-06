// Check off todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on x to delete
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();	
});

// Create todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// get text box value
		var todoText = $(this).val();
		$(this).val("");
		// append new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

// Toggle form
$("#toggle-form").click(function() {
	$("input[type='text']").fadeToggle();
});