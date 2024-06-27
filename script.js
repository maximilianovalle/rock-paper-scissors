const GAME_ROUNDS = 3;

let humanScore = 0;
let compScore = 0;
let gameNum = 0;

function addGame() {
    gameNum++;
}

function addPointHuman() {
    humanScore++;
}

function addPointComp() {
    compScore++;
}

function calculateGamesPlayed() {
    if (gameNum < GAME_ROUNDS) {
        return true;
    }

    return false;
}

function showFinalScore() {
    alert(getWinner() + "\nYou: " + humanScore + ", Computer: " + compScore);
    resetScores();
}

function resetScores() {
    humanScore = 0;
    compScore = 0;
    gameNum = 0;
}

function getWinner() {
    if (humanScore > compScore) {
        return "YOU WIN!";
    }

    else if (humanScore < compScore) {
        return "YOU LOSE!";
    }

    return "YOU... TIED?";
}

// ROCK BUTTON

function rock() {
    addGame();
    let comPick = pickComputerChoice();

    if (comPick == "paper") {
        addPointComp();
        alert("Computer chose PAPER. You lose.");
    }

    else if (comPick == "scissors") {
        addPointHuman();
        alert("Computer chose SCISSORS. You win.");
    }

    else {
        alert("Computer chose ROCK. Tie.");
    }

    // if 3 games reached

    if (!calculateGamesPlayed()) {
        showFinalScore();
    }
}

// PAPER BUTTON

function paper() {
    addGame();
    let comPick = pickComputerChoice();

    if (comPick == "rock") {
        addPointHuman();
        alert("Computer chose ROCK. You win.");
    }

    else if (comPick == "scissors") {
        addPointComp();
        alert("Computer chose SCISSORS. You lose.");
    }

    else {
    alert("Computer chose PAPER. Tie.");
    }

    // if 3 games reached

    if (!calculateGamesPlayed()) {
        showFinalScore();
    }
}

// SCISSOR BUTTON

function scissors() {
    addGame();
    let comPick = pickComputerChoice();

    if (comPick == "rock") {
        addPointComp();
        alert("Computer chose ROCK. You lose.");
    }

    else if (comPick == "paper") {
        addPointHuman();
        alert("Computer chose PAPER. You win.");
    }

    else {
        return alert("Computer chose SCISSORS. Tie.");
    }

    // if 3 games reached

    if (!calculateGamesPlayed()) {
        showFinalScore();
    }
}

// COMPUTER PICKS

function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1; // returns a random num between 1-3
}

function pickComputerChoice() {
    let randNum = getRandomInt();

    if (randNum == 1) {
        return "rock";
    }

    else if (randNum == 2) {
        return "paper";
    }
    
    return "scissors";
}