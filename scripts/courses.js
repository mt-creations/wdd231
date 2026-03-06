

function showCourses(group) {
    const wdd = document.querySelector(".courses-wdd");
    const cse = document.querySelector(".courses-cse");

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

    updateTotalCredits();

}

function updateTotalCredits() {
    let total = 0;

    const courses = document.querySelectorAll(".courses-wdd p, .courses-cse p");

    courses.forEach(course => {
        if (course.offsetParent !== null) {
            total += Number(course.dataset.credits);
        }
    });

    document.querySelector('#total-credits').textContent = "The total credits for courses listed above is: " + total;
}

updateTotalCredits();