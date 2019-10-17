// Check of specific to-dos by clicking

$("li").click(function() {
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css("color", "black");
		$(this).css("text-decoration", "none");
	} else {
		$(this).css("color", "grey");
		$(this).css("text-decoration", "line-through");
	}
});