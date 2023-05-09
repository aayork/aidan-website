const apiUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wOWLhNznTlcKdrbWRdoLVpt8aM0fFEjbZbns9lV1";

let slide = 0;
let photos = [];

function displayPhoto(number) {
  slide += number;
  if (slide == photos.length) {
    slide = 0;
  } else if (slide < 0) {
    slide = photos.length - 1;
  }
  const photoContainer = document.getElementById("curiosity-photos");
  photoContainer.innerHTML = `
      <h2>${photos[slide].rover.name}</h2>
      <p>${photos[slide].camera.full_name}</p>
      <p><img src="${photos[slide].img_src}"></p>
      <p>Earth date: ${photos[slide].earth_date}</p>
    `;
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    photos = data.photos;
    displayPhoto(0);
    slideshowPlus.onclick = function () {
      displayPhoto(1);
    };
    slideshowMinus.onclick = function () {
      displayPhoto(-1);
    };
  })
  .catch((error) => console.log(error));
