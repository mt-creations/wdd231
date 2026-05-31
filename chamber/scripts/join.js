document.addEventListener("DOMContentLoaded", () => {

    const timestamp = document.getElementById("timestamp");
    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    document.querySelectorAll("[data-modal").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const id = link.getAttribute("data-modal");
            const modal = document.getElementById(id);

            if (modal) {
                modal.showModal();
            }
        });
    });

    document.querySelectorAll("[data-close]").forEach(btn => {
        btn.addEventListener("click", () => {
            
            const id = btn.getAttribute("data-close");
            const modal = document.getElementById(id);

            if (modal) {
                modal.closest();
            }
        });
    });

});
