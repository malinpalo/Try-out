//**Declaring global variables to manipulate the DOM */
const btns = document.getElementsByTagName('button');
const start = document.getElementById('start')
let rock = document.getElementById('r');
let scissors = document.getElementById('s');
let paper = document.getElementById('p');
const boxWin = document.getElementById('box-win');
const boxLose = document.getElementById('box-lose');
const restart = document.getElementById('restart');

/**Event listener for the player buttons */
document.addEventListener("DOMContentLoaded", function () {

	for (let button of btns) {
		button.addEventListener("click", function () {
			let playerChoice = this.getAttribute("data-choice");
			theGame(playerChoice);
            
		});
        start.addEventListener('click', startGame);
	}
});

/**Function for computers random choice */
function computerRandomChoice() {
	let options = ['rock', 'paper', 'scissors'];
	let randomNr = Math.floor(Math.random() * options.length);
	return options[randomNr];
}
/**The Game, a function for the computers and players choices andpossible outcomes*/
function theGame(playerChoice) {
	
	let compChoice = computerRandomChoice();
	if (compChoice === 'rock' && playerChoice === 'paper') {
		playerWin();
	}
	if (compChoice === 'paper' && playerChoice === 'scissors') {
		playerWin();
	}
	if (compChoice === 'scissors' && playerChoice === 'rock') {
		playerWin();
	}
	if (compChoice === 'paper' && playerChoice === 'rock') {
		compWin();
	}
	if (compChoice === 'scissors' && playerChoice === 'paper') {
		compWin();
	}
	if (compChoice === 'rock' && playerChoice === 'scissors') {
		compWin();
	} else if (compChoice === playerChoice) {
		draw();
	}
}
/** Function that increments the score by one for the player and resets the score to zero if the restart button is clicked */

function playerWin() {
	let playerScore = parseInt(document.getElementById("player-score").innerText);
	document.getElementById("player-score").innerText = ++playerScore;
	document.getElementById("info").innerHTML = ' YEAY, You win!';
	if (playerScore == 5) {
		winningGame();
		rock.style.display = "none";
		scissors.style.display = "none";
		paper.style.display = "none";
		boxWin.style.display = "flex";
		restart.style.display = "flex";
	}
}

/** Function that increments the score by one for the computer and resets the score to zero if the restart button is clicked */

function compWin() {
	let compScore = parseInt(document.getElementById("comp-score").innerText);
	document.getElementById("comp-score").innerText = ++compScore;
	document.getElementById("info").innerHTML = 'Buuhu, You Lose!';
	if (compScore== 5) {
		lostGame();
		rock.style.display = "none";
		scissors.style.display = "none";
		paper.style.display = "none";
		boxLose.style.display = "flex";
		restart.style.display = "flex";
	}
}
/** Function for when the start button is beeing clicked*/
function startGame () {
    document.getElementById('welcome-box').style.display = "none";
	start.style.display = "none";
	rock.style.display = "flex";
	scissors.style.display = "flex";
	paper.style.display = "flex";
	document.getElementById('score-box').style.display = "flex";
	document.getElementById('game-area').style.display = "flex";
	document.getElementById('info').innerHTML = "Choose a weapon!";
}

/**Function that leaves a message if the player wins*/
function winningGame () {
    document.getElementById("win-lose").innerHTML = '';
    document.getElementById("info").innerHTML = '';
}
/**Function that leaves a message if the player lose*/
function lostGame () {
    document.getElementById("win-lose").innerHTML = '';
    document.getElementById("info").innerHTML = '';
}

/**Function that leaves a message if It's a draw*/
function draw () {
    document.getElementById("win-lose").innerHTML = '';
}

/**Function to restart game */
document.getElementById('restart').addEventListener("click",function() {
    document.getElementById('box-win').style.display = "none";
    document.getElementById('box-lose').style.display = "none";
    rock.style.display = "flex";
	scissors.style.display = "flex";
	paper.style.display = "flex";
    document.getElementById('info').innerHTML = "Choose your weapon!";
    document.getElementById('comp-score').innerText = 0;
    document.getElementById('player-score').innerText = 0;
    document.getElementById('restart').style.display = 'none';
 
});