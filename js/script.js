//Isotope active js code:
//************************

// Active isotope with jQuery code:

$(".main-iso").isotope({
	itemSelector: ".item",
	layoutMode: "fitRows"
});
// Isotope click function
$(".filter-button-group").on("click", "button", function(){
	$(".filter-button-group button").removeClass("active");
	$(this).addClass("active");

	var selector = $(this).attr("data-filter");
    console.log("value", value);
	$(".main-iso").isotope({
		filter: selector
	});
	return false;
});

/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/

