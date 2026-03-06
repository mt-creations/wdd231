
/***************** NAVIGATION *******************/

const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
    });

/******************* FOOTER *********************/

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `\u00A9 ${currentYear} ~ Michael Thomas ~ California`;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


/*************** COURSE BUTTONS ******************/

function showCourses(group) {
    const wdd = document.querySelector(".courses-wdd");
    const cse = document.querySelector(".courses-cse")

    if (group === "all") {
        wdd.style.display = "block";
        cse.style.display = "block";
    }

    if (group === "courses-wdd") {
        wdd.style.display = "block";
        cse.style.display = "none";
    }

    if (group === "courses-cse") {
        wdd.style.display = "none";
        cse.style.display = "block";
    }

    let total = 0;
    const visibleCourses = document.querySelectorAll(".courses-wdd p, .courses-cse p");

    visibleCourses.forEach(course => {
        if (course.parentElement.style.display !== "none") {
            total += Number(course.dataset.credits);
        }
    })

    document.querySelector('#total-credits').textContent = "The total credits for courses listed above is: " + total;


}