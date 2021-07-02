// console.log("Js connected");

const button1 = document.querySelector("#player1");
const button2 = document.querySelector("#player2");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const playing_to = document.querySelector("#total");
const resetBtn = document.querySelector("#reset");
const winner = document.querySelector("#winnerText");
const winnerId = document.querySelector("#winnerCode");
button1.addEventListener("click", () => {
  let score = score1.innerText;
  score++;
  score1.innerText = score;
  if (playing_to.value === score1.innerText) {
    // console.log("Player 1 Wins");
    winnerCode.innerText = "1";
    winner.style.display = "block";
    disable();
  }
});

button2.addEventListener("click", () => {
  let score = score2.innerText;
  score++;
  score2.innerText = score;
  //   if (score === playing_to.nodeValue) {
  //     console.log("Player 2 wins");
  //   }
  //   playing_to.value === score2.innerText && console.log("Player 2 Wins");
  if (playing_to.value === score2.innerText) {
    winnerCode.innerText = "2";
    winner.style.display = "block";
    disable();
  }
});

const disable = () => {
  button1.disabled = true;
  button2.disabled = true;
};

resetBtn.addEventListener("click", () => {
  reset();
});

const reset = () => {
  score1.innerText = "0";
  score2.innerText = "0";
  button1.disabled = false;
  button2.disabled = false;
  winnerCode.innerText = "0";
  winner.style.display = "none";
};
