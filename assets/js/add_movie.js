document.getElementById("add_movie").onclick = function () {
  let movieTitle = document.getElementById("movieTitle").value;
  let movieDescription = document.getElementById("movieDescription").value;
  let genreType = document.getElementById("genreType").value;
  let file = document.getElementById("file").value;
  let releaseDate = document.getElementById("releaseDate").value;
  let params = {
    "file": file,
    "movieDto": {
      "movieTitle": movieTitle,
      "movieDescription": movieDescription,
      "genreType": genreType,
      "releaseDate": releaseDate,
      "userId": 1
    }
  };

  const addMovie = async () => {
    let req = await request(
      "POST",
      "http://localhost:8080/movie/create",
      true,
      params
    );
    let status = req.status;

    if (Number(status) === 200) {
      window.location.href = 'admin.html'
      console.log('success')
    }
    else {
      alert('Cannot login')
    }
  }
  addMovie();

}
