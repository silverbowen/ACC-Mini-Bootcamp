function itemWasClicked() {
    	$(this).toggleClass('completed');
};
$(document).on('click', 'li', itemWasClicked);

function removeMe() {
    $(this).parent().remove();
}
$(document).on('click', 'span', removeMe);

$('input').keypress( function(event) {
    if (event.which === 13) {
    	$("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
    	$(this).val("");
    }
});

$(document).on('click', 'h2', removeMe);