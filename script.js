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

function getGamesPlayed() {
    if (gameNum < GAME_ROUNDS) {
        return true;
    }

    return false;
}

function showFinalScore() {
    // alert(getWinner() + "\nYou: " + humanScore + ", Computer: " + compScore);

    let textChange = document.querySelector("#gameplayText");
    let myString = getWinner() + "\nYou: " + humanScore + ", Computer: " + compScore;
    textChange.textContent += " ... " + myString;

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

    return "YOU... TIED!";
}

// CHANGE PAGE TEXT

function changeText(changeTo, finalScore) {
    let textChange = document.querySelector("#gameplayText");
    textChange.textContent = gameNum + ": " + changeTo;
}

function changeScore() {
    let textChange = document.querySelector("#scoreboard");
    textChange.textContent = humanScore + " - " + compScore;
}

// ROCK BUTTON

function rock() {
    addGame();
    let comPick = getComputerChoice();

    if (comPick == "paper") {
        addPointComp();
        changeScore();
        changeText("LOSS - Computer chose PAPER.");
    }

    else if (comPick == "scissors") {
        addPointHuman();
        changeScore();
        changeText("WIN - Computer chose SCISSORS.");
    }

    else {
        changeText("TIE - Computer chose ROCK.");
    }

    // if 3 games reached

    if (!getGamesPlayed()) {
        showFinalScore();
    }
}

// PAPER BUTTON

function paper() {
    addGame();
    let comPick = getComputerChoice();

    if (comPick == "rock") {
        addPointHuman();
        changeScore();
        changeText("WIN - Computer chose ROCK.");
    }

    else if (comPick == "scissors") {
        addPointComp();
        changeScore();
        changeText("LOSS - Computer chose SCISSORS.")
    }

    else {
        changeText("TIE - Computer chose PAPER.");
    }

    // if 3 games reached

    if (!getGamesPlayed()) {
        showFinalScore();
    }
}

// SCISSOR BUTTON

function scissors() {
    addGame();
    let comPick = getComputerChoice();

    if (comPick == "rock") {
        addPointComp();
        changeScore();
        changeText("LOSS - Computer chose ROCK.");
    }

    else if (comPick == "paper") {
        addPointHuman();
        changeScore();
        changeText("WIN - Computer chose PAPER.");
    }

    else {
        changeText("TIE - Computer chose SCISSORS.");
    }

    // if 3 games reached

    if (!getGamesPlayed()) {
        showFinalScore();
    }
}

// COMPUTER PICKS

function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1; // returns a random num between 1-3
}

function getComputerChoice() {
    let randNum = getRandomInt();

    if (randNum == 1) {
        return "rock";
    }

    else if (randNum == 2) {
        return "paper";
    }
    
    return "scissors";
}