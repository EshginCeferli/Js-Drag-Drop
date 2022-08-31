let uploadIcon = document.querySelector(".upload-icon")
let dragArea = document.querySelector(".drag-area");
let table = document.querySelector(".table")
let file;

uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
})

dragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
})
dragArea.addEventListener("dragleave", () => {

})
dragArea.addEventListener("drop", (event) => {
    event.preventDefault();
    // file = event.dataTransfer.files;
    for (const file of event.dataTransfer.files) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            table.lastElementChild.innerHTML += `<tr>
        <td>${file.size / 1024} Kb</td>
        <td>${file.name}</td>
        <td><img src="${fileURL}" width="100px" height="100px" alt=""></td>
      </tr>`
        }
        fileReader.readAsDataURL(file);
    }
})