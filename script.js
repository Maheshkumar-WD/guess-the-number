let secretNumber = Math.ceil(Math.random() * 20);

let points = 20;
let highScore = 0;
const againBtn = document.querySelector(".tryagain");
const clickBtn = document.querySelector(".guessBtn");
const output = document.querySelector(".output");
const input = document.querySelector(".guess_number");
const message = document.querySelector(".message");
const scorePoints = document.querySelector(".scorePts");
let lifePoints = document.querySelector(".leftPts");
lifePoints.textContent = points;

function displayMessage(mess) {
  message.textContent = mess;
}

// ------------------------------------------------------------------------

// clickBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (!input.value) {
//     displayMessage("E . T . N");
//   } else { // when input is value is given
//     if (input.value < secretNumber) { // when input value is too low
//       // message.textContent = "N . T . L";
//       displayMessage("N . T . L");
//       points--;
//       lifePoints.textContent = points;
//     } else if (input.value > secretNumber) { // when input value is too high
//       // message.textContent = "N . T . H";
//       displayMessage('N . T . H')
//       points--;
//       lifePoints.textContent = points;
//     } else { // when guess is correct
//       if (input.value == secretNumber) {
//         highScore = points;
//         console.log(highScore);
//         // message.textContent = "N IS C";
//         displayMessage("N IS C");
//         output.textContent = secretNumber;
//         output.style.backgroundColor = "green";
//         output.style.color = "white";
//         scorePoints.textContent = highScore;

//         if(points < highScore ){
//           highScore = points;
//           scorePoints.textContent = highScore;
//         }
//       }
//     }
//   }
//   if (points == 0) {
//     clickBtn.disabled = true;
//     message.textContent = "Game Over!!!"
//   }
// });
// //  try again button click and resetting all
againBtn.addEventListener("click", function () {
  secretNumber = Math.ceil(Math.random() * 20);
  points = 20;
  output.textContent = "?";
  output.style.backgroundColor = "red";
  output.style.color = "white";
  displayMessage("Start Guessing...");
  lifePoints.textContent = points;
  input.value = "";
  clickBtn.disabled = false;
});

// -------------------------------------------------------------------

clickBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!input.value) {
    // if input is empty
    displayMessage("please enter number");
  } else {
    if (input.value != secretNumber) {
      // if inputvalue is not equal to secretnumber
      points--;
      lifePoints.textContent = points;
      if (input.value > secretNumber) {
        // if inputvalue is greaterthan secretnumber
        displayMessage("Too Large");
      } else if (input.value < secretNumber) {
        // if inputvalue is lessthan secretnumber
        displayMessage("Too Small");
      }
      if (points == 0) {
        // when lifepoints touch 0
        clickBtn.disabled = true;
        displayMessage("Game Over !!!");
      }
    } else if (input.value == secretNumber) {
      // when inputvalue is correct
      displayMessage("Your Guess is correct");
      output.textContent = secretNumber;
      output.style.backgroundColor = "green";
      output.style.color = "white";
      clickBtn.disabled = true;
      if (points > highScore) {
        // compares to previous score and display highscore
        highScore = points;
        scorePoints.textContent = highScore;
      }
    }
  }
});
