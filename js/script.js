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
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})