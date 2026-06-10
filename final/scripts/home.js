const cards = document.querySelectorAll('.allergen-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});