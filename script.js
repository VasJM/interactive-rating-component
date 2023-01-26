const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');

const ratingState = document.querySelector('.state--rating');
const thankYouState = document.querySelector('.state--thankyou');

let userRating = document.querySelector(".user-rating");

let prevBtn = null;

ratingBtns.forEach(ratingBtn => ratingBtn.addEventListener("click", toggleRatingBtnActiveState));

submitBtn.addEventListener("click", toggleThankYouState);

function toggleRatingBtnActiveState() {
    this.classList.add("rating-btn--active");

    if (prevBtn !== null) {
        prevBtn.classList.remove("rating-btn--active");
    }

    prevBtn = this;
} 

function toggleThankYouState() {
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");

    userRating.innerHTML = prevBtn.dataset.rating;
}


