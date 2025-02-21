document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("passwordInput");
    const videoContainer = document.getElementById("videoContainer");

    input.addEventListener("input", function () {
        if (input.value === "Лайщук Ян") {
            videoContainer.style.display = "block"; // Показуємо відео
        }
    });
});


let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})