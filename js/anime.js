/**
 * ANIME.js
 * v1.0
 * MIT license (c) 2016 Alex Zappa a.k.a. re[at]lat
 * http://anime.reatlat.net/
 */

$(document).ready(function() {

    "use strict";
    
    $('.anime').each(function() {
        var elem = $(this);
        var style = {
            'visibility': 'hidden',
            'animation-name': 'none'
        };
        elem.css(style);
    });

    $('.anime').appear();

    $('.anime').on('appear', function() {
        var elem = $(this);
        var animationDuration = elem.data('anime-duration') || '1.5s';
        var animationDelay = elem.data('anime-delay') || '0s';
        var style = {
            'visibility': 'visible',
            'animation-name': '',
            'animation-delay': animationDelay,
            '-webkit-animation-delay': animationDelay,
            'animation-duration': animationDuration,
            '-webkit-animation-duration': animationDuration
        };
        if (elem.css('visibility') === 'hidden') {
            elem.addClass('animated').css(style);
        }
    });

});