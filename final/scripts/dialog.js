// dialog

export async function loadDialogs() {
    try {
        const response = await fetch("data/allergens.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);   
        }

        const allergens = await response.json();

        const container = document.getElementById('dialog-container');

        allergens.forEach(allergen => {
            container.insertAdjacentHTML("beforeend",
                `<dialog id="${allergen.id}">

                <img src="${allergen.image}" alt="${allergen.name}" loading="lazy">

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

    } catch (error) {
        console.error("Error loading allergen data:", error);

        document.getElementById(`dialog-container`).innerHTML = 
            "<p>Unable to load allergen information.</p>";
    }
};