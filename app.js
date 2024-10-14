let uscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice img"); // Use the img element instead of div
const uScoreDisplay = document.getElementById("u-score");
const compScoreDisplay = document.getElementById("comp-score");
const msgDisplay = document.getElementById("msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice(); // Generate computer choice
    console.log("Computer choice = ", compChoice);

    // Game logic to determine the winner
    if (userChoice === compChoice) {
        msgDisplay.textContent = "It's a tie!";
        msgDisplay.style.backgroundColor = "#bec8bb"; // Tie background color
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        msgDisplay.textContent = `You win! Your ${userChoice} beats ${compChoice}`;
        msgDisplay.style.backgroundColor = "#64ff33"; // User win background color
        uscore++;
    } else {
        msgDisplay.textContent = `Computer wins! ${compChoice} beats your ${userChoice}`;
        msgDisplay.style.backgroundColor = "#C41E3A"; // Computer win background color
        compscore++;
    }

    // Update score displays
    uScoreDisplay.textContent = uscore;
    compScoreDisplay.textContent = compscore;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.target.id; // Get user choice from the clicked image element
        console.log("Clicked ID:", userChoice); // Debugging log
        playGame(userChoice); // Pass user choice to playGame
    });
});