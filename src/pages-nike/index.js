document.querySelector('.sneaker__btn-like').addEventListener('click', function(event) {
    const modalFone = document.querySelector('.modal__fone');
    const modal = document.querySelector('.modal');
    const body = document.body;
    const closeButton = document.querySelector('.modal__button-close');
    const scrollPosition = window.scrollY; // Запам'ятовуємо позицію скролу
    
    body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px'; // Запобігаємо зміщенню контенту
    modalFone.style.display = 'block';
    modal.style.display = 'block';
    body.style.overflow = 'hidden'; // Блокуємо скрол
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокручуємо сторінку вверх
    
    const closeModal = () => {
        modalFone.style.display = 'none';
        modal.style.display = 'none';
        body.style.overflow = ''; // Відновлюємо скрол
        body.style.paddingRight = ''; // Прибираємо відступ
        window.scrollTo({ top: scrollPosition, behavior: 'instant' }); // Повертаємо користувача на попередню позицію
    };
    
    setTimeout(closeModal, 10000);
    
    closeButton.addEventListener('click', closeModal);
    
    modalFone.addEventListener('click', (event) => {
        if (event.target === modalFone) {
            closeModal();
        }
    });
});
