let mapLauncher = document.querySelector(".map-mini");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close-button");
let pageBody = document.querySelector("body");

function showFunc(button, popup) {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-active");
    });
}

function closeFunc(button, popup) {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-active");
    });
    
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-active")) {
                evt.preventDefault();
                popup.classList.remove("modal-active");
            }
        }
    }); 

    pageBody.addEventListener("click", function (evt) {
        if (popup.classList.contains("modal-active") && !evt.target.classList.contains("modal")) {
            popup.classList.remove("modal-active");            
        }        
    });
}

showFunc(mapLauncher, mapPopup);
closeFunc(mapClose, mapPopup);