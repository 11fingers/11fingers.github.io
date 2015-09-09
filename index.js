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
	
	$('.Menu-Close img').hover(function() {
		$(this).attr('src', 'Images/close.png');
		}, function() {
		$(this).attr('src','Images/closer.png');
	});

    $('.Menu-Close').click(function() {
        $('.Navigation').animate ({
            left: '-260px'
        }, 200);
		$('.Menu-Close').animate({
            left: '-260px'
        }, 200);
    });
	
};

$(document).ready(function() {
	"use strict";
	$('#jumbo-description').animate({opacity:1, visibility: 'visible'}, 200);
	$('.description').animate({opacity:1, visibility: 'visible'}, 200);
	$(document).ready(main);
});