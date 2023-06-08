const getMovie = async () => {
  let req = await request(
    "GET",
    "http://localhost:9595/movie/read-all-movie",
    true
  );

  let data = req.data;


  const div = data.map(i => {

    return `
      <div class="col-2">
      <span class="editbtn" data_movie_id="${i.movieId}">
        <div class="card position-relative">
          <img src="http://localhost:5500/${i.imageFullPath}" class="card-img-top" alt="...">
          <button id="bookmark-icon" class="bookmark-icon">
          <i class="fas fa-bookmark watchlist-icon position-absolute" style="top: 10px; right: 10px;"></i>
          </button>
          <div id="popup" class="hidden">
            Bookmark added!
          </div>
          <div class="card-body">
            <h5 class="card-title text-black">${i.movieTitle}</h5>
             <p class="card-text">${i.movieDescription}</p> 
            <!-- <a href="#" class="btn btn-success">Give rating</a>
              <a href="#" class="btn btn-success" data-toggle="tooltip" data-placement="top" title=" Added to a list">+
              </a> -->
          </div>
        </div>
 
      </div>
    `;
  });


  $(document).ready(function () {
    $(document).on("click", ".editbtn", function () {
      let movieId = $(this).attr("data_movie_id");
      localStorage.setItem('movieId', movieId);

      window.location.href = "moviePage.html";
    });
  });

  document.getElementById('movie').innerHTML = div;

};

getMovie();

// document.getElementById("movie").onclick = function () {
//   localStorage.setItem('movieId', data.movieId)


// }
