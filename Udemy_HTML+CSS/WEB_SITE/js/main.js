window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs_item");
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs_item_active")) {
                    otherItem.classList.remove("tabs_item_active");
                }
            })
            elem.classList.add("tabs_item_active")
        });
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fa-solid fa-angle-left"></i></div>',
        nextArrow: '<div class="carousel_arrow carousel_next"><i class="fa-solid fa-angle-right"></i></div>'
    });
});