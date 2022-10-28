'use strict';

// Generating a random number (SecretNumber) for the player to guess
let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable

let highscore = 0; //A variable for highscore to make sure that at the beginning of the game the highscore will always be set to zero

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

///// The implementation of the coding challenge////
//// Values go back to initial values when someone clicks the "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20; //High score
  Math.trunc(Math.random() * 20) + 1; //Secret Number
  document.querySelector('.message').textContent = 'start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Code for when someone clicks the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //////////////////////////////////////////////////////////////////////
  //when there is no input
  if (!guess) {
    /*    document.querySelector('.message').textContent = 'No Number!'; */
    displayMessage('No Number!');

    ////////////////////////////////////////////////////////////////////
    // when the user wins
  } else if (guess === SecretNumber) {
    /* document.querySelector('.message').textContent = 'Correct Number'; */
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    ////////////////////////////////////////////////////////////
    //// when guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > SecretNumber ? 'Too high' : 'Too low'; */
      displayMessage(guess > SecretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      /* 
      document.querySelector('.message').textContent = 'You Lost The Game!'; */
      displayMessage('You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
