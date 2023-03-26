$(document).ready(function() {
    var link = $('.m-menu-link'),
        menu = $('.m-menu'),
        close = $('.close-menu');

    link.on('click', function(event) {
        event.preventDefault;
        menu.toggleClass('m-menu__active');
    })
    close.on('click', function(event) {
        event.preventDefault;
        menu.toggleClass('m-menu__active');
    })
});
