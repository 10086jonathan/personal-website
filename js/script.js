// IPO input - process - output

// declare your constants and variables (state)
let year;

// select and cache DOM element refrences
const yearEl = document.getElementById('year');

// initialize your event listeners

// define application functions

// run the function as soon as the page loads
init();

function init() {
    year = new Date().getFullYear();
    yearEl.innerText = year;
}