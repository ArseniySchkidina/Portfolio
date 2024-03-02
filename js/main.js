const anchorLinks = document.querySelectorAll(".anchor-link")
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
})
anchorLinks.forEach(element => {
    element.addEventListener("click", function () {
        menu.classList.remove("active");
        burger.classList.remove("active");
    })
});
















