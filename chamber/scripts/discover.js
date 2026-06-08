
import {places} from "../data/places.mjs";

const cardHolder = document.querySelector('#card-holder');

function displayItems(places) {
    places.forEach(place => {
        const card = document.createElement('div');
        card.classList.add("discover-card")

        const title = document.createElement('h2');
        title.textContent = place.name;
        card.appendChild(title);

        const figure = document.createElement('figure');

        const image = document.createElement('img');
        image.src = place.photo;
        image.alt = place.name;
        image.loading = "lazy";

        figure.appendChild(image);
        card.appendChild(figure);

        const address = document.createElement('address');
        address.textContent = place.address;
        card.appendChild(address);

        const description = document.createElement('p');
        description.textContent = place.description;
        card.appendChild(description);

        const button = document.createElement('button');
        button.textContent = 'Learn More';
        card.appendChild(button);

        cardHolder.appendChild(card);
        
    });
}

displayItems(places)