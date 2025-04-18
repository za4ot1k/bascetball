
(() => {
    const refs = {
        input: document.querySelector("#passwordInput"), 
        modal: document.querySelector("[data-modal]"),
        closeModalBtn: document.querySelector("[data-modal-close]"), 
        video: document.querySelector("video") 
    };

    const secretPhrase = "Лайщук Ян"; 

    refs.input.addEventListener("input", checkInput);
    refs.closeModalBtn.addEventListener("click", closeModal);
    document.addEventListener("keydown", onEscPress);
    refs.modal.addEventListener("click", onBackdropClick);

    function checkInput() {
        if (refs.input.value.trim() === secretPhrase) {
            openModal();
        }
    }

    function openModal() {
        refs.modal.classList.remove("is-hidden");
        document.body.classList.add("no-scroll");
        refs.input.disabled = true; 
    }

    function closeModal() {
        refs.modal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
        refs.video.pause(); 
        refs.video.currentTime = 0; 
        refs.input.disabled = false;
    }

    function onEscPress(event) {
        if (event.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
            closeModal();
        }
    }

    function onBackdropClick(event) {
        if (event.target === refs.modal) {
            closeModal();
        }
    }
})();


let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
       
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
});




document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".Dunk__img");
    const buttonLeft = document.querySelector(".Dunk__button-left");
    const buttonRight = document.querySelector(".Dunk__button-right");
    const section = document.querySelector(".Dunk");
    const title = document.querySelector(".Dunk__title");
    const description = document.querySelector(".Dunk__discription");
    let currentIndex = 0;

    const slideData = [
        { bgColor: "#95A1A7", titleColor: "#fff", title: "Blue SB Dunk", description: "View All Blue Dunks" },
        { bgColor: "#B84D50", titleColor: "#9B2C2C", title: "Red SB Dunk", description: "View All Red Dunks" },
        { bgColor: "#D1B69E", titleColor: "#4B2E83", title: "Brown SB Dunk", description: "View All Brown Dunks" },
        { bgColor: "#A2B688", titleColor: "#1D4D3F", title: "Green SB Dunk", description: "View All Green Dunks" }
    ];

    function updateSlider(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
        updateBackground(index);
        updateText(index);
    }

    function updateBackground(index) {
        section.style.backgroundColor = slideData[index].bgColor || "#ffffff";
    }

    function updateText(index) {
        title.textContent = slideData[index].title;
        description.textContent = slideData[index].description;
        title.style.color = slideData[index].titleColor || "#000000"; 
    }

    function handleButtonClick(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        updateSlider(currentIndex);
    }

    [buttonLeft, buttonRight].forEach(button => {
        button.addEventListener("click", function () {
            handleButtonClick(button === buttonRight ? 1 : -1);
        });
        button.querySelector("svg")?.addEventListener("click", function (event) {
            event.stopPropagation(); 
            handleButtonClick(button === buttonRight ? 1 : -1);
        });
    });

    updateSlider(currentIndex);
});


