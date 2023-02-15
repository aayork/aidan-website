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
let output2 = document.querySelector("#alsoRan2");
let output3 = document.querySelector("#alsoRan3");
let slideshowOnePlus = document.querySelector("#slideshowOnePlus");
let slideshowOneMinus = document.querySelector("#slideshowOneMinus");
let slideshowTwoPlus = document.querySelector("#slideshowTwoPlus");
let slideshowTwoMinus = document.querySelector("#slideshowTwoMinus");
let slideshowThreePlus = document.querySelector("#slideshowThreePlus");
let slideshowThreeMinus = document.querySelector("#slideshowThreeMinus");

output.innerHTML +=
  "<div class='cand'>" +
  arrayOne[0] +
  "<br>  <img src = pix/" +
  arrayOnePix[0] +
  ">" +
  arrayTwo[0] +
  "<img src = pix/" +
  arrayTwoPix[0] +
  ">" +
  arrayThree[0] +
  "<img src = pix/" +
  arrayThreePix[0] +
  "></div>";

i = 0;
j = 0;
k = 0;

function canShow(plusMinusOne, plusMinusTwo, plusMinusThree) {
  output.innerHTML +=
    "<div class='cand'>" +
    arrayOne[i] +
    "<br>  <img src = pix/" +
    arrayOnePix[i] +
    ">" +
    arrayTwo[j] +
    "<img src = pix/" +
    arrayTwoPix[j] +
    ">" +
    arrayThree[k] +
    "<img src = pix/" +
    arrayThreePix[k] +
    "></div>";
  i += plusMinusOne;
  j += plusMinusTwo;
  k += plusMinusThree;
  if (i == arrayOne.length) {
    i = 0;
  }
  if (i < 0) {
    i = arrayOne.length - 1;
  }
  if (j == arrayTwo.length) {
    j = 0;
  }
  if (j < 0) {
    j = arrayTwo.length - 1;
  }
  if (k == arrayThree.length) {
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
