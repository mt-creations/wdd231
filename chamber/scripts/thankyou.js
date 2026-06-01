document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    document.getElementById("firstName").textContent =
        params.get("first-name");

    document.getElementById("lastName").textContent =
        params.get("last-name");

    document.getElementById("email").textContent =
        params.get("email");

    document.getElementById("phone").textContent =
        params.get("phone");

    document.getElementById("organization").textContent =
        params.get("organization");

    const timestamp = params.get("timestamp");

    document.getElementById("timestamp").textContent =
        new Date(timestamp).toLocaleString("en-US", {
            dateStyle: "long", timeStyle: "short"
        });
});