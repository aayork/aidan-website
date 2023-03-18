var divLoad = document.querySelector("#maindiv");
var theAnswer = [];

function qa() {
  divLoad.innerHTML = "";
  $.getJSON("https://jservice.io/api/random?count=10", function (data) {
    for (i = 0; i < 10; i++) {
      theAnswer.push(data[i].answer);
      divLoad.innerHTML += "<h3>Category: " + data[i].category.title + "</h3>";
      divLoad.innerHTML += " Question: " + data[i].question;
      divLoad.innerHTML += "<div id='answer" + i + "'></div>";
      divLoad.innerHTML +=
        "<button onclick='showAnswer(" + i + ")'>Show Answer</button>";
    }
  });
}

function showAnswer(b) {
  let answer = "#answer" + b;
  answer = document.querySelector(answer);
  answer.innerHTML = "<b>The answer is " + theAnswer[b] + "</b>";
}
