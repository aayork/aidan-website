var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var category = document.querySelector("#category");
var theAnswer = "";

function qa() {
  $.getJSON("https://jservice.io/api/random", function (data) {
    question.innerHTML = data[0].question;
    category.innerHTML = "Category: " + data[0].category.title;
    theAnswer = data[0].answer;
  });
}

function showAnswer() {
  answer.innerHTML = theAnswer;
}
