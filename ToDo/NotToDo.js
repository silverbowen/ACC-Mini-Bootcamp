var h1WasClicked = function() {
    alert('Stop poking my h1, foolish mortal!');
};
$('h1').on('click', h1WasClicked);

var pageClickedOnce = false;
function pageWasClicked() {
    if (!pageClickedOnce)
    	alert('This pops up when the page is clicked anywhere');
    pageClickedOnce = true;
};
$('body').on('click', pageWasClicked);


var inputClickedOnce = false;
$('input').keypress(function() {
    if (!inputClickedOnce)
    	alert('You pressed the Big Red Button!');
    inputClickedOnce = true;
});

$('li').on('click', function() {
	$(this).remove();
});