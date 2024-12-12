// Скролл к секции
document.querySelectorAll('.scroll-button').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(button.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
