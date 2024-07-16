/* mengganti gambar ketika pilih gambar dari directory*/
const inputFileGambar = document.getElementById("inputing-images-profile")

inputFileGambar.addEventListener("change", function () {
    const getImg = document.querySelector(".ea-img")
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            getImg.setAttribute("src", this.result)
        })
        reader.readAsDataURL(file)
    }
})


// Mengambil semua elemen label dengan class "password-view-toggle-ico"
const toggleIcons = document.querySelectorAll(".password-view-toggle-ico");

// Menambahkan EventListener ke setiap elemen label dengan class "password-view-toggle-ico"
toggleIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        // Mengambil ID input terkait dari atribut "for" pada elemen label
        const inputId = icon.getAttribute("for");
        togglePasswordVisibility(inputId);
    });
});

// Fungsi untuk mengaktifkan/menonaktifkan fitur toggle
function togglePasswordVisibility(inputId) {
    const inputElement = document.getElementById(inputId);
    // const type = inputElement.getAttribute("type");

    // console.log({inputElement : inputElement, inputCheck : inputElement.checked})

    const targetTogglePasswordView = inputElement.previousElementSibling.previousElementSibling

    if (!inputElement.checked) {
        targetTogglePasswordView.setAttribute("type", "text");
    } else {
        targetTogglePasswordView.setAttribute("type", "password");
    }
}