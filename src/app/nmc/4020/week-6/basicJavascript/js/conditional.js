let reaction = document.querySelector("#response");
let buildList = document.querySelector("#userInput");
for (var i = 0; i < 100; i++) {
  buildList.innerHTML += "<option value=" + i + ">" + i + "</option>";
}

function compare() {
  let answer = document.querySelector("#userInput");
  answer = answer.value;
  answer = Number(answer);
  console.log(answer);
  switch (true) {
    case answer == 24:
      reaction.innerHTML = "correct";
      break;
    case answer < 24:
      reaction.innerHTML = "too low";
      break;
    case answer > 24:
      reaction.innerHTML = "too high";
      break;
  }
}

/*
function compare() {
  if (answer === 24) {
    reaction.innerHTML = "The answer is correct";
  } else if (answer > 24 && answer < 28) {
    reaction.innerHTML = "Answer is close but too high";
  } else if (answer < 24 && answer > 20) {
    reaction.innerHTML = "Answer is close but too low";
  } else if (answer > 28) {
    reaction.innerHTML = "Answer is way too high";
  } else answer < 20;
  reaction.innerHTML = "Answer is way too low";
}
*/
