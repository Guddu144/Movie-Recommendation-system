const getMovie = async () => {
  let req = await request(
    "GET",
    "http://localhost:9595/movie/read-all-movie",
    true
  );

  let val = req.data;
  
  const div = val.map(i => {

    return  ` <div class="col-2">
        <span class="editbtn" data_movie_id="${i.movieId}">
        <div class="card position-relative">
          <img src="http://localhost:9595/image/${i.movieId}" class="card-img-top" alt="...">
          <button id="bookmark-icon" class="bookmark-icon">
          <i class="fas fa-bookmark watchlist-icon position-absolute" style="top: 10px; right: 10px;"></i>
          </button>
          <div id="popup" class="hidden">
            Bookmark added!
          </div>
          <div class="card-body">
            <h5 class="card-title text-black">${i.movieTitle}</h5>
             <p class="card-text">${i.movieDescription}</p> 
          </div>
        </div>
      </div>`
  });

  document.getElementById('latest').innerHTML = div;

};

getMovie();

// document.getElementById("movie").onclick = function () {
//   localStorage.setItem('movieId', data.movieId)


// }
