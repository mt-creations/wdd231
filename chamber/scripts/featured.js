

const url = "data/members.json";
const container = document.querySelector("#featured-cards");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    let eligible = data.members.filter(member => ["2", "3"].includes(member.membership_level));
    let random = eligible.sort(() => Math.random() - 0.5);
    let featured = random.slice(0,3);

    displayMembers(featured);
}

function displayMembers(members) {
    members.forEach(member => {

        let card = document.createElement('section');
        card.classList.add("card");
        card.classList.add("featured-card");

        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img')
        
        name.textContent = member.company_name;

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
        image.setAttribute('width', '200')

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
    });
}

getMembers();

