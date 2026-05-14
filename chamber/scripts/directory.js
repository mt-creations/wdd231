

const url = "data/members.json";
const container = document.querySelector("#cards");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    members.forEach(member => {

        let card = document.createElement('section');
        card.classList.add("card");

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let level = document.createElement('p');
        
        name.textContent = member.company_name;
        name.classList.add('dir-name');

        address.textContent = 
           `${member.company_address.street},
            ${member.company_address.city},
            ${member.company_address.state}, ${member.company_address.zip_code}`;

        phone.textContent = member.phone_number;

        website.textContent = "Visit Our Website";
        website.href = member.website_URL;
        website.target = "_blank";

        image.setAttribute('src', `images/${member.image_file_name}`);
        image.setAttribute('alt', `${member.company_name} logo`)
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');

        level.classList.add('level');

        if (member.membership_level === "2") {
            level.textContent = "🥈 Silver Member 🥈";    
        }
        else {
            level.textContent = "🥇 Gold Member 🥇"
        }

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(website);

        container.appendChild(card);
    });
}

getMembers();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});