// DOM elements
let fadedBackground = document.getElementById("fadedBackground");
let subHeading = document.getElementById("subHeading");
let container = document.getElementById("container");

// Constants
let fadedBackgroundOpacity = 0.3

// First set of tranformations to start animations
function animationsOne() {
    // Fades in sub heading
    subHeading.style.opacity = 1;
    // Blurs out background image
    fadedBackground.style.opacity = fadedBackgroundOpacity;
    // Resets the scroll to the top
    container.scrollTop = 0;
    // Removes the event listener
    container.onscroll = undefined;
}

// Event listener on the container for when it scrolls to start animations
container.onscroll = function() {
    animationsOne();
}
