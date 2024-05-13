document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk memeriksa apakah elemen ada di dalam dokumen
    function checkElement(element, name) {
        if (!element) {
            console.error("Elemen " + name + " tidak ditemukan.");
            return false;
        }
        return true;
    }

    // Mendapatkan elemen-elemen yang dibutuhkan
    const overlay = document.getElementById("overlay_popup_form");
    const form = document.getElementById("popup_form");
    const service1 = document.getElementById("service_01_btn");
    const closeBtn = document.getElementById("close_popup_btn");

    // Memeriksa elemen-elemen yang tidak ditemukan
    const elementsFound = [
        checkElement(overlay, "overlay_popup_form"),
        checkElement(form, "popup_form"),
        checkElement(service1, "service_01_btn"),
        checkElement(closeBtn, "close_popup_btn")
    ];

    // Memeriksa apakah semua elemen ditemukan
    const allElementsFound = elementsFound.every(element => element);

    // Menambahkan event listener jika semua elemen ditemukan
    if (allElementsFound) {
        service1.addEventListener("click", function () {
            overlay.style.display = "block";
            form.style.display = "block";
        });
        
        overlay.addEventListener("click", function () {
            this.style.display = "none";
            form.style.display = "none";
        });
        
        closeBtn.addEventListener("click", function () {
            overlay.style.display = "none";
            form.style.display = "none";
        });
    }
});
