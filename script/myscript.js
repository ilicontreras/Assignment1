// CODING FOR YOUSSEF'S CARD HIDE & SHOW
function showcard() {

    var element = document.getElementById("card");
    element.classList.remove("hide");
    var element = document.getElementById("black");
    element.classList.remove("hide");

}

function hidecard() {

    var element = document.getElementById("card");
    element.classList.add("hide");
    var element = document.getElementById("black");
    element.classList.add("hide");
    hidephotocarrousel();
    hideyvideo();
}

// CODING FOR CARROUSEL
var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {

    if (slideIndex == 1 & n == -1) {
        slideIndex = 3;
    } else if (slideIndex == 3 & n == 1) {
        slideIndex = 1;
    } else {
        slideIndex = slideIndex + n;
    }

    showSlides(slideIndex);

}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);

}


function showSlides(slideIndex) {
    $(".slides").addClass('hide');
    let index = slideIndex;
    $("#s" + index).removeClass('hide');


}

function showphotocarrousel() {

    var element = document.getElementById("photocarrousel");
    element.classList.remove("hide");
    var element = document.getElementById("black");
    element.classList.remove("hide");

}

function hidephotocarrousel() {

    var element = document.getElementById("photocarrousel");
    element.classList.add("hide");
    var element = document.getElementById("black");
    element.classList.add("hide");

}



const image = document.getElementById("animation");

// Set initial size and limits for shrinking
const initialSize = 270; // Initial image width (same as in CSS)
const minSize = 100;     // Minimum width the image can shrink to



const rbuttons = document.querySelectorAll('.rightbuttons');


const buttons = document.querySelectorAll('.leftbuttons');

// Set the initial margin-right and the maximum scroll limit
const initialMargin = 1500; // Start with a 500px right margin
const minMargin = 0;       // Margin will reduce to 0
const maxScroll = 1000;    // The scroll amount after which margin becomes 0



// Add scroll event listener
window.addEventListener("scroll", function () {
    // Get the current scroll position
    let scrollTop = window.scrollY;

    // Calculate new image width based on scroll position
    let newSize = initialSize - scrollTop * 0.05; // Adjust the shrink rate by changing the multiplier
    let newMargin = initialMargin - (scrollTop) * 0.5;

    // Ensure the margin doesn't go below 0
    if (newMargin < minMargin) {
        newMargin = minMargin;
    }

    // Apply the new margin to all buttons
    buttons.forEach(button => {
        button.style.marginRight = newMargin + "px";
    });


    rbuttons.forEach(button => {
        button.style.marginLeft = newMargin + "px";
    });

    // Ensure the image doesn't shrink below the minimum size
    if (newSize > minSize & newSize < 270) {
        image.style.width = newSize + "px";
    } else if (newSize >= 270) {
        image.style.width = 270 + "px";
    }
    else {
        image.style.width = minSize + "px"; // Stop shrinking at minimum size
    }



});

// START OF VIDEO CODING

function showyvideo() {

    var element = document.getElementById("yvideo");
    element.classList.remove("hide");
    var element = document.getElementById("black");
    element.classList.remove("hide");

}

function hideyvideo() {
    var element = document.getElementById("yvideo");
    element.classList.add("hide");
    var element = document.getElementById("black");
    element.classList.add("hide");
    
}
