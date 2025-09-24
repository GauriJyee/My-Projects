'use strict';
//two methods to select elements
//get by id is little bit faster
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
//when game is finished we'll set it to false so that we no longer can click the buttons
let play, activePlayer, currentScore = 0;
let scores = [0, 0];

//big overall score
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
}
function init() {
  play = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];

  score0.textContent = '0';
  score1.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';
  //hide the dice
  diceEl.classList.add('hidden');
  //js doesnt show any error if we try to add a class which is already there and try to remove a class which waas not there already
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
}
init();
btnRoll.addEventListener('click', function () {
  //generating random dice roll
  if (play) {
    //rolling the dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    //displaying it on screen
    //displaying the image acc to the rolled dice number using js
    diceEl.src = `dice-${dice}.png`;

    //check if the dice roll is 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      switchPlayer();
      //switch to next player
    }
  }
})

btnHold.addEventListener('click', function () {
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = (scores[activePlayer]);
    if (scores[activePlayer] >= 20) {
      //finish the game 
      play = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    else {
      switchPlayer();
    }
  }
})
btnNew.addEventListener('click', init);

