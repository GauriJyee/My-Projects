// 'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// //if it was id #message
// //setting the value of element
// document.querySelector('.message').textContent='Correct Number🥳🤩';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=12;
// document.querySelector('.guess').value=11;
// console.log(document.querySelector('.guess').value);
//Click Events 
//any input we get from user is a string so we name a number to compare with a random generated number
//bcz the number just a decimal number which is less that 20 bcz 20.something will never be included and never its integral part so +1
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;

}
//Check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number((document.querySelector('.guess').value));
    //if no guess Value of guess will be zero which is a 
    //falsy value but we want a true value for the
    //if to excecute if theres no input so we use negation operator 
    //no input
    if (!guess) {
        displayMessage('⛔️ No Number');

    }
    //When player wins
    else if (guess === secretNumber) {

        displayMessage('Correct Number🥳🤩');
        document.querySelector('.number').textContent = secretNumber;
        //css manipulation
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            displayMessage('You lost the Game!!');
            document.querySelector('body').style.backgroundColor = '#E3425C';
            document.querySelector('.score').textContent = 0;
        }
    }
})
//Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})


