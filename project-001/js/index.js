const change = document.querySelector(".btn");
const body = document.querySelector("body");
const testimonial = document.querySelector(".testimonial");
const reviewer = document.querySelector(".top");
const review = document.querySelector(".review");

change.addEventListener("click", changeMode);

function changeMode() {
    body.classList.toggle("dark-mode-body");
    testimonial.classList.toggle("dark-mode-testimonial");
    reviewer.classList.toggle("dark-mode-reviewer");
    review.classList.toggle("dark-mode-review");
}