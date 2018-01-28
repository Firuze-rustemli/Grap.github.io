$(document).ready(function () {

    // nav scrol
    $(window).scroll(function () {
        if ($(document).scrollTop() > 620) {
            $('#nav-header').addClass('shrink');
        } else {
            $('#nav-header').removeClass('shrink');
        }
    });


    //smooth section scroll
    var headerHeight = $('#main').outerHeight();
    $('.slide-section').click(function (e) {
        var linkHref = $(this).attr('href');
        // console.log($(linkHref).offset().top);
        // console.log(headerHight);
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);
        e.preventDefault();
    });


    //responsive button toggle
    $(".navbar-toggle").click(function () {
        $('ul.nav').addClass('backgrounds');
    });


    // slider1
    $(".slide-carusel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        margin: 10,
        // nav:false,
        responsiveClass: true,
        navText: [
            " ",
            " "
        ],
        responsive: {
            0: {
                items: 5,
                nav: true
            }
        }
    });

    // slide dots color

    $('.owl-theme .owl-nav .owl-prev').click(function () {
        $(this).addClass('slide-dot');
        $('.owl-next').removeClass('slide-dot');
    });


    $('.owl-theme .owl-nav .owl-next').click(function () {
        $(this).addClass('slide-dot');
        $('.owl-prev').removeClass('slide-dot');
    })

    // support data-tab

    $('.support-list li').click(function (e) {
        e.preventDefault();
        var tabID = $(this).data('tab');
        $('.store-content .active-tab').removeClass('active-tab');
        $('#tab-' + tabID).addClass('active-tab');
        // li addclas color
        $('.support-list .active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');

    });

    // testimonals slider

    $(".testimonal-slide").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: false,
        margin: 10,
        nav: true,
        responsiveClass: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });


    //scrollUp
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '50', // Distance from top before showing element (px)
            topSpeed: 1000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 0, // Animation in speed (ms)
            animationOutSpeed: 1000, // Animation out speed (ms)
            scrollText: [
                "<i class='fa fa-angle-up'></i>",
            ], // Text for element
            activeOverlay: true, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });

});