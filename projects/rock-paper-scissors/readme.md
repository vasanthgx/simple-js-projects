### **Project Description**

---

# **Rock-Paper-Scissors Game**

This is a simple Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. In this game, a player can choose between Rock, Paper, or Scissors, and the computer will randomly select a move. The game keeps track of the player's and the computer's scores, displaying the result of each round. The game can be played continuously, and the scores will update after each round.

---

### **Features:**
- **Interactive UI**: Buttons for player to select Rock, Paper, or Scissors.
- **Random Computer Move**: The computer randomly selects one of the three options.
- **Score Tracking**: Both the player’s and the computer’s scores are displayed and updated after every round.
- **Round Result Display**: Each round result is displayed to inform the player if they won, lost, or tied the round.

---

## **How to Run the Game:**
1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a browser.
3. Play the game by clicking on any of the three buttons (Rock, Paper, or Scissors).
4. The result of each round will be displayed, and the scores will be updated accordingly.

---

### **Code Explanation**

---

### **HTML (index.html):**

This file defines the structure of the game interface.

- **Head Section**: 
  - Sets up the meta tags and page title.
  - Links to an external CSS file (`style.css`) for styling.
  
- **Body Section**:
  - Contains an `h1` tag for the game's title.
  - A set of buttons for the player to choose between Rock, Paper, or Scissors.
  - A paragraph to display the result of each round (`id="result"`).
  - A section to track and display the player's and computer's scores (`id="user-score"` and `id="computer-score"`).

---

### **JavaScript (index.js):**

This file contains the logic to make the game functional and interactive.

- **Element Selection:**
  ```javascript
  const buttons = document.querySelectorAll("button");
  const resultEl = document.getElementById("result");
  const playerScoreEl = document.getElementById("user-score");
  const computerScoreEl = document.getElementById("computer-score");
  ```
  - These lines fetch the necessary elements from the HTML file for use in the game logic. The `buttons` array holds all three buttons, and the score elements and result display element are stored for later updates.

- **Variables to Track Scores:**
  ```javascript
  let playerScore = 0;
  let computerScore = 0;
  ```
  - These variables will hold the player's and computer's scores, which start at 0.

- **Event Listeners:**
  ```javascript
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;
    });
  });
  ```
  - Each button is assigned an event listener. When the user clicks on a button, it triggers the `playRound()` function, passing the button's `id` as the player's choice. The result of the round is then displayed in the `resultEl`.

- **Computer's Move Function:**
  ```javascript
  function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }
  ```
  - This function randomly selects and returns the computer's move from the choices of "rock", "paper", or "scissors".

- **Play Round Function:**
  ```javascript
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  ```
  - **Comparison Logic**: 
    - The function compares the player's move and the computer's move.
    - If both moves are the same, the result is a tie.
    - If the player wins (e.g., Rock beats Scissors), the player’s score increases, and a message is returned stating the win.
    - If the computer wins, the computer’s score is updated, and a losing message is returned.
  - After each round, the scores are updated in the corresponding HTML elements (`playerScoreEl` and `computerScoreEl`).

---

### **Project Files:**
- `index.html`: Contains the structure and layout of the game.
- `style.css`: Contains the styles for the game interface (to be customized).
- `index.js`: Contains the game logic.

---
