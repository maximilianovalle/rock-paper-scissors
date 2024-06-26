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

function games() {
    if (gameNum < 3) {
        return true;
    }

    return false;
}

function finalScore() {
    alert("You: " + humanScore + ", Computer: " + compScore);
    reset();
}

function reset() {
    humanScore = 0;
    compScore = 0;
    gameNum = 0;
}

// rock button

function rock() {
    addGame();
    let comPick = computerChoice();

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

    if (gameNum >= 3) {
        finalScore();
    }
}

// paper button

function paper() {
    addGame();
    let comPick = computerChoice();

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

    if (gameNum >= 3) {
        finalScore();
    }
}

// scissor button

function scissors() {
    addGame();
    let comPick = computerChoice();

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

    if (gameNum >= 3) {
        finalScore();
    }
}

// computer picks

function randomInt() {
    return Math.floor(Math.random() * 3) + 1; // returns a random num between 1-3
}

function computerChoice() {
    let randNum = randomInt();

    if (randNum == 1) {
        return "rock";
    }

    else if (randNum == 2) {
        return "paper";
    }
    
    return "scissors";
}