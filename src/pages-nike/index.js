document.querySelector('.sneaker__btn-like').addEventListener('click', function(event) {
    const modalFone = document.querySelector('.modal__fone');
    const modal = document.querySelector('.modal');
    const body = document.body;
    const closeButton = document.querySelector('.modal__button-close');
    const scrollPosition = window.scrollY; 
    
    body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px'; 
    modalFone.style.display = 'block';
    modal.style.display = 'block';
    body.style.overflow = 'hidden'; 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    
    const closeModal = () => {
        modalFone.style.display = 'none';
        modal.style.display = 'none';
        body.style.overflow = ''; 
        body.style.paddingRight = ''; 
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    };
    
    setTimeout(closeModal, 10000);
    
    closeButton.addEventListener('click', closeModal);
    
    modalFone.addEventListener('click', (event) => {
        if (event.target === modalFone) {
            closeModal();
        }
    });
});



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

