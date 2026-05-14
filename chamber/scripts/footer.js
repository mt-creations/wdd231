const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `\u00A9 ${currentYear} ~ Michael Thomas ~ California`;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;