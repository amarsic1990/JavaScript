'use strict';

// uvik koristiti query selector
// selecting elements
// uvik dodavati varijable
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let playing, currentScore, activePlayer, scores;

const init = () => {
  // setting scores at 0 at starting of the game
  // current score
  currentScore = 0;
  // total scores of player 1 and player 2
  scores = [0, 0];

  // 0 --> if active player is player0; 1 --> if active player is player1
  // we start with player 1
  activePlayer = 0;

  playing = true; // STATE VARIJABLA kad zavrsi igra ovo stavljamo na false i nista drugo se ne izvrsava

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden'); // hide dice
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // TOGGLE METODA dodaje klasu ako je nema a uklanja je ako je tu
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // ovo je top napravija bez petlje i switcha

    // 3 check for rolled 1: if true,
    if (dice !== 1) {
      // drzat varijable u podacima
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // dinamicko buildanje ID name-a
      //current0El.textContent = currentScore; // CHANGE LATER
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1.  add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.  check if player score is >=100
    if (scores[activePlayer] >= 20) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
    }
    // switch the player
    switchPlayer();
  }
});

// U EVENT HANDLER MOZEMO DODATI FUNKCIJU
btnNew.addEventListener('click', init);
// score0El = 0;
// score1El = 0;
// current0El = 0;
// current1El = 0;
// document.querySelector('.player--0').classList.remove('player--winner');
// document.querySelector('.player--1').classList.remove('player--winner');
// document.querySelector('.player--0').classList.remove('player--active');
// document.querySelector('.player--1').classList.remove('player--active');

// ON JE NAPRAVIO OVAKO

///////////////////////////////////////////////////////

// document.querySelector('#score--0').textContent = 0;
// document.querySelector('#score--1').textContent = 0;
// document.querySelector('#current--0').textContent = 0;
// document.querySelector('#current--1').textContent = 0;
// playing = true;
// scores = [0, 0];
// document.querySelector('.player--0').classList.add('player--active');
// activePlayer = 0;
