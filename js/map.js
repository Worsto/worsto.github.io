let mapLauncher = document.querySelector(".map-mini");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close-button");

mapLauncher.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-active");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-active");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-active")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-active");
        }
    }
});