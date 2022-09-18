let swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

let bar = document.querySelector(".bar");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body")


bar.addEventListener("click", () => {

    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
    else {
        sidebar.classList.add("active");
    }
})


