// SCORE FUNCTIONS

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

function wonGame() {
    if (humanScore == 2 || compScore == 2) {
        return true;
    }

    return false;
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

function changeText(changeTo) {
    let textChange = document.querySelector("#gameplayText");
    textChange.textContent = gameNum + ": " + changeTo;
}

function changeScore() {
    let textChange = document.querySelector("#scoreboard");
    textChange.textContent = humanScore + " - " + compScore;
}

function changeGamesPlayed() {
    let textChange = document.querySelector("#gamesPlayed");
    textChange.textContent = "Games Played: " + gameNum + " / " + GAME_ROUNDS;
}

function showWinLoss() {
    let textChange = document.querySelector("#winLossMssg");
    textChange.textContent = getWinner();
    document.getElementById("winLossMssg").style.visibility = "visible";

    resetScores();
}

function hideWinLoss() {
    document.getElementById("winLossMssg").style.visibility = "hidden";
}

function callTextChanges(changeTo) {
    changeScore();
    changeGamesPlayed();
    hideWinLoss();
    changeText(changeTo);
}

// ROCK BUTTON

function rock() {
    addGame();
    let comPick = getComputerChoice();

    if (comPick == "paper") {
        addPointComp();
        callTextChanges("LOSS - Computer chose PAPER.");
    }

    else if (comPick == "scissors") {
        addPointHuman();
        callTextChanges("WIN - Computer chose SCISSORS.");
    }

    else {
        callTextChanges("TIE - Computer chose ROCK.");
    }

    // if 3 games reached or 2 points achieved

    if (!getGamesPlayed() || wonGame()) {
        showWinLoss();
    }
}

// PAPER BUTTON

function paper() {
    addGame();
    let comPick = getComputerChoice();

    if (comPick == "rock") {
        addPointHuman();
        callTextChanges("WIN - Computer chose ROCK.");
    }

    else if (comPick == "scissors") {
        addPointComp();
        callTextChanges("LOSS - Computer chose SCISSORS.")
    }

    else {
        callTextChanges("TIE - Computer chose PAPER.");
    }

    // if 3 games reached or 2 points achieved

    if (!getGamesPlayed() || wonGame()) {
        showWinLoss();
    }
}

// SCISSOR BUTTON

function scissors() {
    addGame();
    let comPick = getComputerChoice();

    if (comPick == "rock") {
        addPointComp();
        callTextChanges("LOSS - Computer chose ROCK.");
    }

    else if (comPick == "paper") {
        addPointHuman();
        callTextChanges("WIN - Computer chose PAPER.");
    }

    else {
        callTextChanges("TIE - Computer chose SCISSORS.");
    }

    // if 3 games reached or 2 points achieved

    if (!getGamesPlayed() || wonGame()) {
        showWinLoss();
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