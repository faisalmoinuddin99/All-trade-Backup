var ww,
    wh;
var get_height_width = function() {
	ww = $(window).width();
	wh = $(window).height();
	//alert(wh);
}

function leftPaneHeight() {
	var winHeight = wh;
	//alert(winHeight);
	$('.left-1').css('height', winHeight + 'px');
	$('.left-2').css('height', winHeight + 'px');
}

function mainContainer(){
//alert(winHeight);
var winHeight = wh;
$('.main-conatiner').css('height', winHeight + 'px');
}

$(document).ready(function(){
get_height_width();
// leftPaneHeight();
mainContainer();

	$('.panel-collapse').on('show.bs.collapse', function () {
	$(this).siblings('.panel-heading').addClass('active');
	});

	$('.panel-collapse').on('hide.bs.collapse', function () {
	    $(this).siblings('.panel-heading').removeClass('active');
		 });

	$(window).on('load', function() {
		// leftPaneHeight();
		mainContainer();
	});
	
	$(window).resize(function(){
		get_height_width();
		// leftPaneHeight();
		mainContainer();
	});
});