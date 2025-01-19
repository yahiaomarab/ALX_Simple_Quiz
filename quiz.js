function checkAnswer() {
  const radioButton = document.querySelectorAll('[name="quiz"]');
  const textStatus = document.querySelector("#feedback");
  let userAnswer;
  let correctAnswer = 4;
  radioButton.forEach((answer) => {
    if (answer.checked) {
      userAnswer = answer.value;
    }
  });
  if (userAnswer === correctAnswer) {
    textStatus.textContent = "Correct! Well done.";
  } else {
    textStatus.textContent = "That's incorrect. Try again!";
  }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
