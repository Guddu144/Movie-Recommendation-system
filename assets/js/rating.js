document.getElementById("rate_btn").addEventListener("click", function () {
  var selectedRating = document.querySelector('input[name="star"]:checked').value;

  console.log(selectedRating);

  const rating = async () => {
    const movieId = localStorage.getItem('movieId')
    params = {
      "ratingNumber": selectedRating,
      "movieId": movieId
    }
    let req = await request(
      "POST",
      "http://localhost:9595/rating/create",
      true,
      params
    );
    console.log(req)

    // if (Number(status) === 200) {
    //   // window.location.href = 'home.html'
    //   console.log('suc')
    //   localStorage.setItem('token', req.JwtToken)

    // }
    // else {
    //   alert('Cannot login')
    // }
  }
  rating();

});






