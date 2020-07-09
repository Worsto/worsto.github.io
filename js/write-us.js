let writeUsButton = document.querySelector(".write-us-button");
let writeUsPopup = document.querySelector(".modal-write-us");
let writeUsClose = writeUsPopup.querySelector(".modal-close-button");
let writeUsForm = writeUsPopup.querySelector(".write-us-form");
let writeUsName = writeUsPopup.querySelector(".popup-form-name");
let writeUsEmail = writeUsPopup.querySelector(".popup-form-email");

writeUsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-active");
    writeUsName.focus();
});

writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-active");
    writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
    if (!writeUsName.value || !writeUsEmail.value) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-error");
        writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
        writeUsPopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (writeUsPopup.classList.contains("modal-active")) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-active");
            writeUsPopup.classList.remove("modal-error");
        }
    }
});