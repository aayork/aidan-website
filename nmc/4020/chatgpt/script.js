const apiUrl =
  "https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=jHiO1R5Cxohjya05TtDkkoNDf40W3c5NmHuFlDpd";

var count = 0;
var parkArray = new Array();
var slide = 0;
const parkItem = document.createElement("li");

function displayPark(parkArray, parksList, number) {
  slide += number;
  if (slide == parkArray.length - 1) {
    slide = 0;
  }

  if (slide < 0) {
    slide = parkArray.length - 1;
  }

  parkItem.innerHTML = `<h2>${parkArray[slide].fullName}</h2><p>${parkArray[slide].description}</p><p><a href=${parkArray[slide].images[0].url}><img src=${parkArray[slide].images[0].url}></a><p>Longitude: ${parkArray[slide].longitude}</p><p>Latitude: ${parkArray[slide].latitude}</p>`;
  parksList.appendChild(parkItem);
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const parks = data.data;
    const parksList = document.getElementById("parks-list");
    parks.forEach((park) => {
      parkArray[count] = park;
      console.log(parkArray[count]);
      count++;
    });
    slideshowPlus.onclick = function () {
      displayPark(parkArray, parksList, 1);
    };

    slideshowMinus.onclick = function () {
      displayPark(parkArray, parksList, -1);
    };
  })
  .catch((error) => console.log(error));
