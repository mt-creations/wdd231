const dialog = document.getElementById("course-details")

function displayCourseDetails(course) {
    dialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    dialog.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        dialog.close();
    });
}