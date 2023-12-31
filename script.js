/*
function onScroll() {
    let scrollPos = window.scrollY / (document.body.getBoundingClientRect().height - window.innerHeight);
    scrollPos = Math.min(Math.max(scrollPos, 0), 1);
    let focusHeight = window.innerHeight * scrollPos;

    document.querySelectorAll("#timeline .event").forEach(function(elem) {
        let elemRect = elem.getBoundingClientRect();

        if (focusHeight >= Math.floor(elemRect.top) && focusHeight <= Math.ceil(elemRect.bottom)) {
            elem.classList.add("focused");
        } else {
            elem.classList.remove("focused");
        }
    });
}
*/

function onScroll() {
    let upperFocusHeight = window.innerHeight / 3;
    let lowerFocusHeight = window.innerHeight / 3 * 2;


    document.querySelectorAll("#timeline .event").forEach(function(elem) {
        let elemRect = elem.getBoundingClientRect();

        if (lowerFocusHeight >= Math.floor(elemRect.top) && upperFocusHeight <= Math.ceil(elemRect.bottom)) {
            elem.classList.add("focused");
        } else {
            elem.classList.remove("focused");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", onScroll); 
    onScroll();
})
