const watchlistIcon = document.querySelector('.watchlist-icon');

watchlistIcon.addEventListener('click', function() {
    // window.location.href = "mylist.html";
  
});
const bookmarkIcon = document.querySelector("#bookmark-icon");
const popup = document.querySelector("#popup");

bookmarkIcon.addEventListener("click", function() {
  bookmarkIcon.style.color = "blue";
  popup.style.display = "block";
});
