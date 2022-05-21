import UserForm from "./components/UserForm";
import { useState, ChangeEvent, FormEventHandler } from "react";
import InfoBar from "./components/InfoBar";
import Display from "./components/Display";
import ActionBar from "./components/ActionBar";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showGame, setShowGame] = useState(true); // when submit name hide form and will show the game
  const [playerName, setPlayerName] = useState(``);

  const handelName = (event: ChangeEvent<HTMLInputElement>) =>
    setPlayerName(event.currentTarget.value);

  const handelSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    //setShowGame(!showGame)
  };
  const handelOutcome = () => {
    let playerSelection: string;
    playerSelection = "Spoke";
    const computerOutcomes = ["rock", "paper", "scissors", "lizard", "Spoke"];

    let computerSelection =
      computerOutcomes[Math.floor(Math.random() * computerOutcomes.length)];
    console.log("computerSelection", computerSelection);

    if (
      playerSelection === "rock" &&
      (computerSelection === "lizard" || computerSelection === "scissors")
    ) {
      console.log("player wins ");
    } else if (
      playerSelection === "rock" &&
      (computerSelection === "Spoke" || computerSelection === "paper")
    ) {
      console.log("player loses ");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "paper" &&
      (computerSelection === "rock" || computerSelection === "Spoke")
    ) {
      console.log("player wins ");
    } else if (
      playerSelection === "paper" &&
      (computerSelection === "lizard" || computerSelection === "scissors")
    ) {
      console.log("player loses ");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "scissors" &&
      (computerSelection === "paper" || computerSelection === "lizard")
    ) {
      console.log("player wins ");
    } else if (
      playerSelection === "scissors" &&
      (computerSelection === "rock" || computerSelection === "Spoke")
    ) {
      console.log("player loses ");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "lizard" &&
      (computerSelection === "paper" || computerSelection === "Spoke")
    ) {
      console.log("player wins ");
    } else if (
      playerSelection === "lizard" &&
      (computerSelection === "rock" || computerSelection === "scissors")
    ) {
      console.log("player loses ");
    } else if (playerSelection === "lizard" && computerSelection === "lizard") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "Spoke" &&
      (computerSelection === "rock" || computerSelection === "scissors")
    ) {
      console.log("player wins ");
    } else if (
      playerSelection === "Spoke" &&
      (computerSelection === "paper" || computerSelection === "lizard")
    ) {
      console.log("player loses ");
    } else if (playerSelection === "Spoke" && computerSelection === "Spoke") {
      console.log(`It's a draw`);
    }
  };

  return (
    <div>
      {showForm && (
        <>
          <h1>Welcome to rock, paper, scissors, lizard, Spoke game!</h1>
          <UserForm
            handelName={handelName}
            playerName={playerName}
            handelSubmit={handelSubmit}
          />
        </>
      )}
      {showGame && (
        <>
          <InfoBar playerName={playerName} />
          <Display />
          <ActionBar handelOutcome={handelOutcome} />
        </>
      )}
    </div>
  );
}

export default App;
