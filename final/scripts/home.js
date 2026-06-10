document.addEventListener('click', (x) => {

    const card = x.target.closest('.allergen-card');
    if (card) {
        document.getElementById(card.dataset.modal).showModal();
    }

    const closeBtn = x.target.closest('[data-close]');
    if (closeBtn) {
        closeBtn.closest('dialog').close();
    }
});