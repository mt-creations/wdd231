
// home.js

import { loadDialogs } from './dialog.js';

loadDialogs();

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

document.addEventListener('click', (x) => {
    const dialog = x.target;

    if (dialog.tagName === 'DIALOG') {
        dialog.close();
    }
});


document.getElementById('sources-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('sources-dialog').showModal();
});
