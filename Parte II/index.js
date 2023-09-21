var likeButtons = document.querySelectorAll(".likeButton");
var likeCounts = Array.from({ length: likeButtons.length }, () => 0);

likeButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
    likeCounts[index]++;

var likeCounter = button.parentElement.querySelector(".like-counter");
    likeCounter.textContent = likeCounts[index];
    });
});
