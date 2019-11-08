$(document).ready(function() {
    $('.carousel').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });

    $('.testimonials-carousel').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    var button = $('.navbar-toggler');
    var close = $('.close-btn');

    button.click(function() {
        $('.nav-globomax').addClass('show-nav');
        $('body').css('overflow','hidden');
    });

    close.click(function() {
        $('.nav-globomax').removeClass('show-nav');
        $('body').css('overflow','visible');
    });
});