// add nav toggle
    // grab ul
    // grab burger icon
    // toggle overflow hidden

const navBar = document.querySelector('.navLinks');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    // navBar.style.overflow = "visible";
    // navBar.style.height = "212px";
    navBar.classList.toggle('showLinks');
});