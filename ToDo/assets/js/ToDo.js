function itemWasClicked() {
    	$(this).toggleClass('completed');
};
$(document).on('click', 'li', itemWasClicked);

$(document).on('click', 'span', function() {
	$(this).parent().remove();
});

$('input').keypress( function(event) {
    if (event.which === 13) {
    	$("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
    	$(this).val("");
    }
});