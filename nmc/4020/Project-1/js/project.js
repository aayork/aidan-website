let arrayOne = [
  "Jeb Bush",
  "Ben Carson",
  "Lincoln Chafee",
  "Chris Christie",
  "Ted Cruz",
  "Carly Fiorina",
  "Jim Gilmore",
];

let arrayTwo = [
  "Lindsey Graham",
  "Bobby Jindal",
  "John Kasich",
  "Lawrence Lessig",
  "Martin O'Malley",
  "George Pataki",
  "Rand Paul",
];

let arrayThree = [
  "Rick Perry",
  "Marco Rubio",
  "Bernie Sanders",
  "Rick Santorum",
  "Donald Trump",
  "Scott Walker",
  "Jim Webb",
];

let arrayOnePix = [
  "bush.jpg",
  "carson.jpg",
  "chafee.jpg",
  "christie.jpg",
  "cruz.jpg",
  "fiorina.jpg",
  "gilmore.jpg",
];

let arrayTwoPix = [
  "graham.jpg",
  "jindal.jpg",
  "kasich.jpg",
  "lessig.jpg",
  "omalley.jpg",
  "pataki.jpg",
  "paul.jpg",
];

let arrayThreePix = [
  "perry.jpg",
  "rubio.jpg",
  "sanders.jpg",
  "santorum.jpg",
  "trump.jpg",
  "walker.jpg",
  "webb.jpg",
];

let output = document.querySelector("#alsoRan");
let slideshowOnePlus = document.querySelector("#slideshowOnePlus");
let slideshowOneMinus = document.querySelector("#slideshowOneMinus");
let slideshowTwoPlus = document.querySelector("#slideshowTwoPlus");
let slideshowTwoMinus = document.querySelector("#slideshowTwoMinus");
let slideshowThreePlus = document.querySelector("#slideshowThreePlus");
let slideshowThreeMinus = document.querySelector("#slideshowThreeMinus");

output.innerHTML +=
  "<div class='cand'><br>  <img src = pix/" +
  arrayOnePix[0] +
  "><img src = pix/" +
  arrayTwoPix[0] +
  "><img src = pix/" +
  arrayThreePix[0] +
  "></div>" +
  "<div class='names'>" +
  arrayOne[0] +
  arrayTwo[0] +
  arrayThree[0] +
  "</div>";

var i = 0;
var j = 0;
var k = 0;

function canShow(plusMinusOne, plusMinusTwo, plusMinusThree) {
  i += plusMinusOne;
  j += plusMinusTwo;
  k += plusMinusThree;
  output.innerHTML =
    "<div class='cand'><br>  <img src = pix/" +
    arrayOnePix[i] +
    "><img src = pix/" +
    arrayTwoPix[j] +
    "><img src = pix/" +
    arrayThreePix[k] +
    "></div>" +
    "<div class='names'>" +
    arrayOne[i] +
    arrayTwo[j] +
    arrayThree[k] +
    "</div>";
  if (i == arrayOne.length - 1) {
    i = 0;
  }
  if (i < 0) {
    i = arrayOne.length - 1;
  }
  if (j == arrayTwo.length - 1) {
    j = 0;
  }
  if (j < 0) {
    j = arrayTwo.length - 1;
  }
  if (k == arrayThree.length - 1) {
    k = 0;
  }
  if (k < 0) {
    k = arrayThree.length - 1;
  }
}

slideshowOnePlus.onclick = function () {
  canShow(1, 0, 0);
};
slideshowOneMinus.onclick = function () {
  canShow(-1, 0, 0);
};
slideshowTwoPlus.onclick = function () {
  canShow(0, 1, 0);
};
slideshowTwoMinus.onclick = function () {
  canShow(0, -1, 0);
};
slideshowThreePlus.onclick = function () {
  canShow(0, 0, 1);
};
slideshowThreeMinus.onclick = function () {
  canShow(0, 0, -1);
};
