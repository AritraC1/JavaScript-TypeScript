// a shorthand function for `document.querySelector`
const $ = (selector) => {
    return document.querySelector(selector)
}

// Uses the $ function to select four elements from the HTML document and assign them to constants:
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true; // to control the visibility of the dot element

function update() {
    showDot = !showDot;
    const now = new Date();

    // Toggles the visibility of the dot element based on showDot
    if (showDot) {
        dot.classList.add('invisible')
    }
    else {
        dot.classList.remove('invisible')
    }

    // Gets the current hour and minute from the Date object.
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    // Converts the children of the .week element (presumably day elements) to an array. Removes the class active from all of them (clears the current active day).
    Array.from(week.children).forEach(
        (e) => {
            e.classList.remove('active');
        }
    );

    // Gets the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday). Adds the active class to the corresponding child of .week, visually indicating the current day.
    week.children[now.getDay()].classList.add('active')
}

// Calls the update() function every 500 milliseconds (i.e., twice per second). This keeps the time display (and blinking dot) updated in real time.
setInterval(update, 500)