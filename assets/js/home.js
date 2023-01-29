const watchlistIcon = document.querySelector('.watchlist-icon');

watchlistIcon.addEventListener('click', function() {
    window.location.href = "mylist.html";
    var addIcon = watchlist.querySelector(".add-icon");
  var checkIcon = watchlist.querySelector(".check-icon");
  addIcon.style.display = "none";
  checkIcon.style.display = "block";
  // Perform action here
});

const watchlist = document.querySelector("#watchlist");

watchlist.addEventListener("click", function() {
  this.classList.toggle("added");
});
