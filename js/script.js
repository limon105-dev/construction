$(function () {

    // ..navbar sidebar start..//

    function slideMenu() {
        var activeState = $(".side-bar").hasClass("active");
        $(".side-bar").animate({
            left: activeState ? "0%" : "-70%"
        }, 300);
    }
    $(".side-btn").click(function (event) {
        event.stopPropagation();
        $(".side-btn").toggleClass("open");
        $(".side-bar").toggleClass("active");
        slideMenu();
    });
    // ..navbar sidebar end..//

    // ...banner counter-up js start...//
    $('.counter').counterUp({
        delay: 7,
        time: 1000
    });
    // ...banner counter-up js end... //

    // ...brand slider js start... //
    $('.brand-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                    centerMode: false,
                    centerPadding: '0px',
                }
            }
        ]
    });
    // ...brand slider js end... //

    // ...team slider js start... //
    $('.team-row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        prevArrow: ".button-left",
        nextArrow: ".button-right",
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }
        ]
    });
    // ...team slider js end... //

})

var namebar = document.getElementById('name')
var namebar_error = document.getElementById('name_error')

var email = document.getElementById('email')
var email_error = document.getElementById('email_error')

var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var Subject = document.getElementById('Subject')
var Subject_error = document.getElementById('Subject_error')

var message = document.getElementById('message')
var message_error = document.getElementById('message_error')

function submit_value() {
    if (namebar.value == '') {
        namebar_error.innerHTML = "Inter your name"
        namebar.style.border = "1px solid red"
        namebar.focus();
        return false;
    }

    if (email.value == '') {
        email_error.innerHTML = "Inter your email"
        email.style.border = "1px solid red"
        email.focus();
        return false;
    }

    if (!email_regex.test(email.value)) {
        email_error.innerHTML = "Email not valid"
        email.style.border = "1px solid red"
        email.focus();
        return false;
    }

    if (Subject.value == '') {
        Subject_error.innerHTML = "type a subject"
        Subject.style.border = "1px solid red"
        Subject.focus();
        return false;
    }

    if(message.value == ""){
        message.focus();

    }
}

function valid() {
    if (namebar.value != '') {
        namebar_error.innerHTML = ""
        namebar.style.border = "1px solid #f4f4f4"
        namebar.style.backgroundColor = "#fff"

    }

    if (email.value != '') {
        email_error.innerHTML = ""
        email.style.border = "1px solid #f4f4f4"
        email.style.backgroundColor = "#fff"
    }

    if (Subject.value != '') {
        Subject_error.innerHTML = ""
        Subject.style.border = "1px solid #f4f4f4"
        Subject.style.backgroundColor = "#fff"
    }

    if(message.value != ""){
        message.style.border = "1px solid #f4f4f4"
        message.style.backgroundColor = "#fff"
    }
}


namebar.addEventListener('blur', valid)
email.addEventListener('blur', valid)
Subject.addEventListener('blur', valid)
message.addEventListener('blur', valid)


var footer_email = document.getElementById('footer-email')
var footer_email_error = document.getElementById('footer-email-error')

function footer_mail_submit() {
    if (footer_email.value == '') {
        footer_email_error.innerHTML = "Inter your email"
        footer_email.style.border = "1px solid red"
        footer_email.focus();
        return false;
    }

    if (!email_regex.test(footer_email.value)) {
        footer_email_error.innerHTML = "Email not valid"
        footer_email.style.border = "1px solid red"
        footer_email.focus();
        return false;
    }
}

function footer_valid() {
    if (footer_email.value != '') {
        footer_email_error.innerHTML = ""
        footer_email.style.border = "1px solid #f4f4f4"
        footer_email.style.backgroundColor = "#fff"
    }
}

footer_email.addEventListener('blur', footer_valid)