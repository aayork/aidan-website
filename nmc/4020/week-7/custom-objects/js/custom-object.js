let classObject = {
  porsche959: " 200 mph porsche from the 80s ",
  audiQuattro: " Group B rally car with 4 wheel drive ",
  toyotaCorolla: " World's most popular car. ",
  landCruiser: " One of the best off-roaders out there ",
  ferrariF40: " Another 200mph car but not as cool as the 959 ",
};

let carArray = [
  "porsche959",
  "audiQuattro",
  "toyotaCorolla",
  "landCruiser",
  "ferrariF40",
];

function quote(car) {
  document.querySelector("#aboutme").innerHTML = classObject[car];
  document.querySelector("#image").innerHTML =
    "<img src='pix/" + car + ".jpg'>";
}
