// JavaScript Document

var main = function() {
	"use strict";
	
	//Menu Animation
    $('.Menu').click(function() {
        $('.Navigation').animate({
            left: '5px'
        }, 200);
		$('.Menu-Close').animate({
            left: '5px'
        }, 200);
    });
	
	/*$('.Menu-Close img').hover(function() {
		$(this).attr('src', 'Images/close.png');
		}, function() {
		$(this).attr('src','Images/closer.png');
	});*/

    $('.hovercontainer').click(function() {
        $('.Navigation').animate ({
            left: '-260px'
        }, 200);
		$('.Menu-Close').animate({
            left: '-260px'
        }, 200);
    });
	
	/*//Code for changing icons
	$('#hackerrank').hover(function() {
		$(this).attr('src', 'Images/hackerrank.png');
		}, function() {
		$(this).attr('src', 'Images/hackerrankDark.png');
	});
	$('#github').hover(function() {
		$(this).attr('src', 'Images/github.png');
		}, function() {
		$(this).attr('src', 'Images/githubDark.png');
	});
	$('#linkedin').hover(function() {
		$(this).attr('src', 'Images/linkedin.png');
		}, function() {
		$(this).attr('src', 'Images/linkedinDark.png');
	}); */
	
};

$(document).ready(main);