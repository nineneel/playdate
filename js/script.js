const navbar_toggler = document.querySelector(".navbar_toggler");
const navbar_nav = document.querySelector(".navbar_nav");

navbar_toggler.addEventListener("click", () => {
    navbar_nav.classList.toggle("navbar_show");
});
