const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
}) 

sr.reveal(`.about , `, {delay:600, origin: 'right', interval: 100})
sr.reveal(` .aboutText , `, {delay:600, origin: 'left', interval: 100})
// sr.reveal(`.home__text, .oval, .about__intro`, {origin: 'top'})
// sr.reveal(`.about__content, .connect, .form`, {origin: 'bottom'})