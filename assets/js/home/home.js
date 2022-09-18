$(document).ready(function () {

    // $(".language").on("click", function () {
    //     // if ($(".language-ex").hasClass('d-none')) {
    //     //     $(".language-ex").removeClass('d-none')
    //     // }
    //     // else {
    //     //     $(".language-ex").addClass('d-none')
    //     // }
    //     $(".language-ex").toggle();

    // });
    // $(document).click(function () {
    //     var container = $(".language-ex");
    //     if (!container.is(event.target) && !container.has(event.target).length) {
    //         container.hide();
    //     }
    // });

    // $(".currency").click(function () {
    //     if ($(".currency-ex").hasClass('d-none')) {
    //         $(".currency-ex").removeClass('d-none')
    //     }
    //     else {
    //         $(".currency-ex").addClass('d-none')
    //     }
    // });

    // $(".profile").click(function () {
    //     if ($(".profile-ex").hasClass('d-none')) {
    //         $(".profile-ex").removeClass('d-none')
    //     }
    //     else {
    //         $(".profile-ex").addClass('d-none')
    //     }
    // });
    $('.tabmenu-wrap .tab-nav').find('a').on('click', function (e) {
        var $this = $(this);
        var $all_tab_nav = $this.parents('.tab-nav').find('.nav');
        var $tab_contents = $this.parents('.tabmenu-wrap').find('.con-box');
        var id = $this.attr('href');

        e.preventDefault();
        $all_tab_nav.removeClass('on');
        $this.parent().addClass('on');
        $tab_contents.hide();
        $(id).show();
    });

    $(document).scroll(function(){
        var st = $(this).scrollTop();
        if(st > 400) {
            $("nav").addClass('fixed');
        } else {
            $("nav").removeClass('fixed');
        }
    });

 

})

let swiper = new Swiper(".mySwiper", {
    loop: true,
});

let swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});


let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        autoplay: {
            delay:100,
            disableOnInteraction: false,
        },
    },
});

var swipe4 = new Swiper(".mySwiper4", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});





