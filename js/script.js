
$(function () {

    $('.sec-nav-menu .sec-nav-submenu li:not(:first-child)').hover(function () {

        $('.sec-nav-menu .sec-nav-submenu li:first-child').css('background-color', 'transparent');
        $('.sec-nav-menu .sec-nav-submenu li:first-child ul').css('display', 'none');

    });

    $('.sec-nav-menu .sec-nav-submenu li:first-child').hover(function () {
        $(this).css('background-color', '#fff');
        $(this).find('ul').css('display', 'block');

    });
    $('.entertainment').hover(function () {
        $('.sec-nav-menu .sec-nav-submenu li:first-child').css('background-color', '#fff');
        $('.sec-nav-menu .sec-nav-submenu li:first-child').find('ul').css('display', 'block');

    });

    function changePos() {
        var header = document.getElementById("header");
        if (window.pageYOffset > 70) {
            header.style.position = "absolute";
            header.style.top = pageYOffset + "px";
            header.style.width = "100%";
            header.style.borderBottom = "1px solid #eee";
            header.style.paddingLeft = "7%";
        } else {
            header.style.position = "";
            header.style.top = "";
            header.style.width = "";
            header.style.borderBottom = "";
            header.style.paddingLeft = "";
        }
    }

    if ($(window).width() > 960) {
        window.onscroll = changePos;
    }
    else {
    }



    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


});
