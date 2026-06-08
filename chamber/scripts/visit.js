

const messageElement = document.querySelector('#visit');

const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

let message = '';

if (!lastVisit) {
    message = 'Welcome! Let us know if you have any questions.';
} else {
    const milSecsBetweenVisits = now - Number(lastVisit);
    const daysBetweenVisits = Math.floor(
        milSecsBetweenVisits / (1000 * 60 * 60 * 24)
    );

    if (daysBetweenVisits < 1) {
        message = 'Back so soon! Awesome!';
    } else if (daysBetweenVisits === 1) {
        message = 'You last visited 1 day ago';
    } else {
        message = `You last visited ${daysBetweenVisits} days ago.`;
    }
}

messageElement.textContent = message;

localStorage.setItem('lastVisit', now);