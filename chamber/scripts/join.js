document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.getElementById("timestamp");
    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    window.openModal = function(id) {
        document.getElementById(id).showModal();
    };

    window.closeModal = function(id) {
        document.getElementById(id).close();
    };


});
