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

let output1 = document.querySelector("#alsoRan1");
let output2 = document.querySelector("#alsoRan2");
let output3 = document.querySelector("#alsoRan3");
let slideshowOnePlus = document.querySelector("#slideshowOnePlus");
let slideshowOneMinus = document.querySelector("#slideshowOneMinus");
let slideshowTwoPlus = document.querySelector("#slideshowTwoPlus");
let slideshowTwoMinus = document.querySelector("#slideshowTwoMinus");
let slideshowThreePlus = document.querySelector("#slideshowThreePlus");
let slideshowThreeMinus = document.querySelector("#slideshowThreeMinus");

output1.innerHTML +=
  "<div class='smalldiv'>" +
  arrayOne[0] +
  "<br>  <img src = pix/" +
  arrayOnePix[0] +
  "></div>";

output2.innerHTML +=
  "<div class='smalldiv'>" +
  arrayTwo[0] +
  "<br>  <img src = pix/" +
  arrayTwoPix[0] +
  "></div>";

output3.innerHTML +=
  "<div class='smalldiv'>" +
  arrayThree[0] +
  "<br>  <img src = pix/" +
  arrayThreePix[0] +
  "></div>";

i = 0;
function canShowOne(plusMinus) {
  output1.innerHTML =
    "<div class='cand'>" +
    arrayOne[i] +
    "<br>  <img src = pix/" +
    arrayOnePix[i] +
    "></div>";
  i += plusMinus;
  if (i == arrayOne.length) {
    i = 0;
  }
  if (i < 0) {
    i = arrayOne.length - 1;
  }
}

function canShowTwo(plusMinus) {
  output2.innerHTML =
    "<div class='cand'>" +
    arrayTwo[i] +
    "<br>  <img src = pix/" +
    arrayTwoPix[i] +
    "></div>";
  i += plusMinus;
  if (i == arrayTwo.length) {
    i = 0;
  }
  if (i < 0) {
    i = arrayTwo.length - 1;
  }
}

function canShowThree(plusMinus) {
  output3.innerHTML =
    "<div class='cand'>" +
    arrayThree[i] +
    "<br>  <img src = pix/" +
    arrayThreePix[i] +
    "></div>";
  i += plusMinus;
  if (i == arrayThree.length) {
    i = 0;
  }
  if (i < 0) {
    i = arrayThree.length - 1;
  }
}

slideshowOnePlus.onclick = function () {
  canShowOne(1);
};
slideshowOneMinus.onclick = function () {
  canShowOne(-1);
};
slideshowTwoPlus.onclick = function () {
  canShowTwo(1);
};
slideshowTwoMinus.onclick = function () {
  canShowTwo(-1);
};
slideshowThreePlus.onclick = function () {
  canShowThree(1);
};
slideshowThreeMinus.onclick = function () {
  canShowThree(-1);
};
