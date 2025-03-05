let scores = [0, 0, 0];
let currentPlayer = 0;

document.getElementById("rollBtn").addEventListener("click", rollDice);
document.getElementById("resetBtn").addEventListener("click", resetGame);

function rollDice() {
    if (currentPlayer < 3) {
        let roll = Math.floor(Math.random() * 6) + 1;
        scores[currentPlayer] = roll;

        document.getElementById(`score${currentPlayer + 1}`).innerText = roll;
        document.getElementById(`dice${currentPlayer + 1}`).innerText = getDiceFace(roll);
        document.getElementById(`dice${currentPlayer + 1}`).style.transform = "rotate(360deg)";

        currentPlayer++;

        if (currentPlayer === 3) {
            declareWinner();
        }
    }
}

function getDiceFace(num) {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return diceFaces[num - 1];
}

function declareWinner() {
    let maxScore = Math.max(...scores);
    let winners = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            winners.push(["Vaishali", "Shivratna", "Payal"][i]);
        }
    }

    let winnerText = winners.length > 1 
        ? `🏆 It's a tie between ${winners.join(" & ")} with ${maxScore} points!`
        : `🏆 Winner: ${winners[0]} with ${maxScore} points!`;

    document.getElementById("winner").innerText = winnerText;
    document.getElementById("winner").classList.add("fire-effect");

    setTimeout(() => {
        document.getElementById("winner").classList.remove("fire-effect");
    }, 2000);

    document.getElementById("rollBtn").style.display = "none";
    document.getElementById("resetBtn").style.display = "block";
}

function resetGame() {
    scores = [0, 0, 0];
    currentPlayer = 0;
    document.getElementById("winner").innerText = "";

    for (let i = 1; i <= 3; i++) {
        document.getElementById(`score${i}`).innerText = "0";
        document.getElementById(`dice${i}`).innerText = "🎲";
    }

    document.getElementById("rollBtn").style.display = "block";
    document.getElementById("resetBtn").style.display = "none";
}
