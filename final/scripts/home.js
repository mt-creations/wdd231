// modal open/close

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


// dialog creation

async function loadDialogs() {
    const response = await fetch("data/allergens.json");
    const allergens = await response.json();

    const container = document.getElementById('dialog-container');

    allergens.forEach(allergen => {
        container.insertAdjacentHTML("beforeend",
            `<dialog id="${allergen.id}">

            <img src="${allergen.image}" alt="${allergen.name}">
                <h2>${allergen.name}</h2>

                <p>
                    <strong>Estimated affected:</strong>
                    ${allergen.affected}
                </p>

                <p>${allergen.description}</p>

                <button data-close>Close</button>
            </dialog>`
        );
    });
}

loadDialogs();