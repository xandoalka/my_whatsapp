const getFile = document.getElementById("choose-file");
const parent = document.querySelector(".upload-csv");
const noFileChoosen = document.getElementById("file-choosen");
const fileChoosen = document.querySelector(".file-upload-container");


getFile.addEventListener("change", function () {

    const file = this.files[0];

    // check if file is more than 1
    if (this.files.length > 1) {
        return alert("You can only upload 1 file \n hanya dapat mengupload 1 file");
    }
    // check if file is not csv
    if (file.type !== "text/csv") {
        return alert("You can only upload csv file \n hanya dapat mengupload file csv");
    }

    const div = document.createElement("div");
    div.classList.add("broadcast-csv-file");
    div.textContent = file.name;

    // delete element with id file-choosen
    if (this.files[0].name) {
        const fileName = document.querySelector("#file-name");
        // toggle display
        noFileChoosen.style.display = "none";
        fileChoosen.style.display = "flex";
        fileName.textContent = file.name;

        /**
         * delete element with class file-upload-container and
         * bring back element with id file-choosen and
         * remove file
         */
        const deleteButton = document.querySelector("#delete-file-list");
        deleteButton.addEventListener("click", function () {
            noFileChoosen.style.display = "block";
            fileChoosen.style.display = "none";
            getFile.value = "";
        })
    }
})