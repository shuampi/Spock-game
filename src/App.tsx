import UserForm from "./components/UserForm";
import { useState, ChangeEvent, FormEventHandler } from "react";
import InfoBar from "./components/InfoBar";
import Display from "./components/Display";
import ActionBar from "./components/ActionBar";
import incognito from "./images/incognito.png"

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showGame, setShowGame] = useState(true); // when submit name hide form and will show the game
  const [playerName, setPlayerName] = useState(``);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
 const [playerImage, setPlayerImage] = useState(incognito);
 const [computerImage, setComputerImage] = useState(incognito);
  const handelName = (event: ChangeEvent<HTMLInputElement>) =>
    setPlayerName(event.currentTarget.value);

  const handelSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    //setShowGame(!showGame)
  };
  const handelOutcome = (playerSelection:string) => {
    
    const computerOutcomes = ["rock", "paper", "scissors", "lizard", "Spock"];

    let computerSelection =
      computerOutcomes[Math.floor(Math.random() * computerOutcomes.length)];
    console.log("computerSelection", computerSelection);
    console.log('playerSelection', playerSelection)
    if (
      playerSelection === "rock" &&
      (computerSelection === "lizard" || computerSelection === "scissors")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1)
    } else if (
      playerSelection === "rock" &&
      (computerSelection === "Spock" || computerSelection === "paper")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1)
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "paper" &&
      (computerSelection === "rock" || computerSelection === "Spock")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1)
    } else if (
      playerSelection === "paper" &&
      (computerSelection === "lizard" || computerSelection === "scissors")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1)
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "scissors" &&
      (computerSelection === "paper" || computerSelection === "lizard")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1)
    } else if (
      playerSelection === "scissors" &&
      (computerSelection === "rock" || computerSelection === "Spock")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1)
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "lizard" &&
      (computerSelection === "paper" || computerSelection === "Spock")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1)
    } else if (
      playerSelection === "lizard" &&
      (computerSelection === "rock" || computerSelection === "scissors")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1)
    } else if (playerSelection === "lizard" && computerSelection === "lizard") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "Spock" &&
      (computerSelection === "rock" || computerSelection === "scissors")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1)
    } else if (
      playerSelection === "Spock" &&
      (computerSelection === "paper" || computerSelection === "lizard")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1)
    } else if (playerSelection === "Spock" && computerSelection === "Spock") {
      console.log(`It's a draw`);
    }
  };

  return (
    <div>
      {showForm && (
        <>
          <h1>Welcome to rock, paper, scissors, lizard, Spock game!</h1>
          <UserForm
            handelName={handelName}
            playerName={playerName}
            handelSubmit={handelSubmit}
          />
        </>
      )}
      {showGame && (
        <>
          <InfoBar playerName={playerName} playerPoints={playerPoints} computerPoints={computerPoints}/>
          <Display playerImage={playerImage} computerImage={computerImage}/>
          <ActionBar handelOutcome={handelOutcome} />
        </>
      )}
    </div>
  );
}

export default App;
