let sortButtons = document.querySelectorAll(".sort-button");
let sortArrows = document.querySelectorAll(".sort-arrow");

function sort(array, className) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            if (!array[i].classList.contains(className)) {
                for (let i = 0; i < array.length; i++) {
                    array[i].classList.remove(className);
                }
            }
            array[i].classList.add(className);
        });
    }
}

sort(sortButtons, "sort-category-current");
sort(sortArrows, "sort-arrow-current");