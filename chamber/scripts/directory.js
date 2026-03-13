

const url = "members.json;";
const container = document.querySelector("#cards");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
}

function displayMembers(members) {
    members.forEach(member => {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img')
        // let level = document.createElement('p');
        // let type = document.createElement('p');
        
        name.textContent = members.company_name;

        address.textContent = 
            members.company_address.street + ", " +
            members.company_address.city + ", " +
            members.company_address.state + ", " +
            members.company_address.zip_code;

        phone.textContent = members.phone_number;

        website.textContent = "Visit Website";
        website.href = members.website_URL;
        website.target = "_blank";

        image.setAttribute('src', member.image_file_name);
        image.setAttribute('alt', `image of ${member.company_name}`)
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200')
        image.setAttribute('height', '100')

        card


    })
}