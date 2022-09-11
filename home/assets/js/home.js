$(document).ready(function () {

    $(".language").click(function () {
        if ($(".language-ex").hasClass('d-none')) {
            $(".language-ex").removeClass('d-none')
        }
        else {
            $(".language-ex").addClass('d-none')
        }
    });

    $(".currency").click(function () {
        if ($(".currency-ex").hasClass('d-none')) {
            $(".currency-ex").removeClass('d-none')
        }
        else {
            $(".currency-ex").addClass('d-none')
        }
    });

    $(".profile").click(function () {
        if ($(".profile-ex").hasClass('d-none')) {
            $(".profile-ex").removeClass('d-none')
        }
        else {
            $(".profile-ex").addClass('d-none')
        }
    });
})

let swiper = new Swiper(".mySwiper",{
    loop:true,
})