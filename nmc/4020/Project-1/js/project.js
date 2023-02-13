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

let i = 0;
function canShowOne(plusMinus) {
  output.innerHTML =
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
  output.innerHTML =
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

function canShowThree(plusMinus) {
  output.innerHTML =
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
