//======================================================
//
//	Custom jQuery scripts for Typefolio
//
//	Only simple scripts go here
//
//======================================================

// debulked onresize handler
// https://github.com/louisremi/jquery-smartresize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

function loop(){
	$("#arrow-down").css('padding-top', '0');
	$("#arrow-down").animate({
		'padding-top' : '60px'
	}, 500).animate({
		'padding-top' : '60px'
	}, 200, loop);
}


$(document).ready(function(){
	"use strict";
	// Simple hover functions
	$('.hoverMe').fadeTo(0, 0.5);
	$('.hoverMe').hover(function () {
		$(this).stop().fadeTo(200, 1);
	}, function () {
		$(this).stop().fadeTo(200, 0.5);
	});

	// Table odd & even functions
	$('table').each(function() {
		$(this).children('tbody').find('tr:odd').addClass('odd');
		$(this).children('tbody').find('tr:even').addClass('even');

		$(this).find('tr').each(function() {
			$(this).children('td').last().addClass('last');
		});
	});

	// Table odd & even functions
	$('ul').each(function() {
		$(this).children('li:last-child').addClass('.last-child');
	});

	// Stackgrid show item information on hover
	$('.stackgrid.images-only .item').hover(function () {
		$(this).find('.box-desc').stop().fadeIn();
	}, function () {
		$(this).find('.box-desc').stop().fadeOut();
	});



	// initialize typeMenu
	// this plugin was specifically written for Typefolio
	$('.sticky').typeSticky();

	// initialize typeMenu
	// this plugin was specifically written for Typefolio
	$('#nav').typeMenu();

	// Tags
	$("#mobile").hover(function() {
		$(".mobile-tag").css('transform','scale(1.07)');
	}, function() {
		$(".mobile-tag").css('transform', 'scale(1.0)');
	});

	$("#web").hover(function() {
		$(".web-tag").css('transform','scale(1.07)');
		$('html').append('<img src="imgs/arrow-down.png" id="arrow-down" style="position:fixed; top: 50%; right: 1.5vw; transform: translate(-50%, 0%); width: 30px;">');
		loop();
	}, function() {
		$(".web-tag").css('transform', 'scale(1.0)');
		$("#arrow-down").remove();
	});

	$("#game").hover(function() {
		$(".game-tag").css('transform','scale(1.07)');
	}, function() {
		$(".game-tag").css('transform', 'scale(1.0)');
	});

	$("#swift").hover(function() {
		$(".swift-tag").css('transform','scale(1.07)');
	}, function() {
		$(".swift-tag").css('transform', 'scale(1.0)');
	});

	$("#java").hover(function() {
		$(".java-tag").css('transform','scale(1.07)');
	}, function() {
		$(".java-tag").css('transform', 'scale(1.0)');
	});

	$("#cs").hover(function() {
		$(".cs-tag").css('transform','scale(1.07)');
	}, function() {
		$(".cs-tag").css('transform', 'scale(1.0)');
	});

	$("#cpp").hover(function() {
		$(".cpp-tag").css('transform','scale(1.07)');
	}, function() {
		$(".cpp-tag").css('transform', 'scale(1.0)');
	});

	$("#js").hover(function() {
		$(".js-tag").css('transform','scale(1.07)');
		$('html').append('<img src="imgs/arrow-down.png" id="arrow-down" style="position:fixed; top: 50%; right: 1.5vw; transform: translate(-50%, 0%); width: 30px;">');
		loop();
	}, function() {
		$(".js-tag").css('transform', 'scale(1.0)');
		$("#arrow-down").remove();
	});

	$("#ml").hover(function() {
		$(".ml-tag").css('transform','scale(1.07)');
		$('html').append('<img src="imgs/arrow-down.png" id="arrow-down" style="position:fixed; top: 50%; right: 1.5vw; transform: translate(-50%, 0%); width: 30px;">');
		loop();
	}, function() {
		$(".ml-tag").css('transform', 'scale(1.0)');
		$("#arrow-down").remove();
	});
});
