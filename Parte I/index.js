var likeButton = document.getElementById("likeButton");
var likeCount = document.getElementById("likeCount");

var count = 0;

likeButton.addEventListener("click", function () {
    count++;
    likeCount.textContent = count;
})