'use strict';

// console.log(document.querySelector('.message').textContent);

// /**
//  * DOM
//  *  DOCUMENT OBJECT MODEL
//  * strukturirana prezentacija HTML dokumenta
//  * DOM je WEB API
//  */

// // mijenjamo sadrzaj ovog elementa priko JSa
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // u inputu imamo VALUE
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

/**
 * EVENT je nesto sto se dogodi na stranici (klik misom/tipkovnicom, pomak misa....)
 * funkcija je samo vrijednost
 */

/**
 * MANIPULATING CSS STYLES
 */
// DOM ukljucuje CSS styles
// s manipulacijom DOMa mozemo promijeniti styles
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = Number(document.querySelector('.score').textContent);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// addEventListener se najcesce koristi
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number');

    // when players wins
  } else if (guess === secretNumber) {
    displayMessage('🧨 Correct Number!');

    // MANIPULIRANJE CSSom!!!!!!!!!!
    // kada manipuliramo sa styles moramo specificirati STRING
    // CAMEL CASE KORISTIMO ZA SPECIFIKACIJU PROPERTYa!!!!!!!!!!!!!!!!!!!!
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    let currentScore = Number(document.querySelector('.score').textContent);
    let highScore = Number(document.querySelector('.highscore').textContent);

    // highscore implementation
    if (currentScore > highScore)
      document.querySelector('.highscore').textContent = currentScore;

    // when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🎃you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/**
 * CODING CHALLENGE #1
 */
// ovo ovde je anonimus funkcija jer nema ime
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});

/**
 * REFACTORING
 */
// restrukturiranje koda
