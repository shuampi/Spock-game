import UserForm from "./components/UserForm";
import { useState, ChangeEvent, FormEventHandler } from "react";
import InfoBar from "./components/InfoBar";
import Display from "./components/Display";
import ActionBar from "./components/ActionBar";
import incognito from "./images/incognito.png";
import rock from "./images/rock_left.webp"
import paper from "./images/paper_right.png"
import scissors from "./images/scissors_left.jpg"
import lizard from "./images/Lizard_right.webp"
import Spock from "./images/spoke.webp"

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
const handelReset=()=>{
  setComputerPoints(0);
  setPlayerPoints(0);
  setComputerImage(incognito);
  setPlayerImage(incognito);
}

  const handelSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    //setShowGame(!showGame)
  };

  const handelOutcome = (playerSelection: string) => {
//set images for player selection
if(playerSelection==='rock'){
  setPlayerImage(rock);
} else if(playerSelection==='paper'){
  setPlayerImage(paper);
}else if(playerSelection==='scissors'){
  setPlayerImage(scissors);
}else if(playerSelection==='lizard'){
  setPlayerImage(lizard);
}else if(playerSelection==='Spock'){
  setPlayerImage(Spock);
}

    const computerOutcomes = ["rock", "paper", "scissors", "lizard", "Spock"];

    let computerSelection =
      computerOutcomes[Math.floor(Math.random() * computerOutcomes.length)];
    console.log("computerSelection", computerSelection);
    console.log("playerSelection", playerSelection);
//set images for computer selection
    if(computerSelection==='rock'){
      setComputerImage(rock);
    } else if(computerSelection==='paper'){
      setComputerImage(paper);
    }else if(computerSelection==='scissors'){
      setComputerImage(scissors);
    }else if(computerSelection==='lizard'){
      setComputerImage(lizard);
    }else if(computerSelection==='Spock'){
      setComputerImage(Spock);
    }
    

    if (
      playerSelection === "rock" &&
      (computerSelection === "lizard" || computerSelection === "scissors")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1);
    } else if (
      playerSelection === "rock" &&
      (computerSelection === "Spock" || computerSelection === "paper")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1);
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "paper" &&
      (computerSelection === "rock" || computerSelection === "Spock")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1);
    } else if (
      playerSelection === "paper" &&
      (computerSelection === "lizard" || computerSelection === "scissors")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1);
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "scissors" &&
      (computerSelection === "paper" || computerSelection === "lizard")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1);
    } else if (
      playerSelection === "scissors" &&
      (computerSelection === "rock" || computerSelection === "Spock")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1);
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
      setPlayerPoints(playerPoints + 1);
    } else if (
      playerSelection === "lizard" &&
      (computerSelection === "rock" || computerSelection === "scissors")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1);
    } else if (playerSelection === "lizard" && computerSelection === "lizard") {
      console.log(`It's a draw`);
    } else if (
      playerSelection === "Spock" &&
      (computerSelection === "rock" || computerSelection === "scissors")
    ) {
      console.log("player wins ");
      setPlayerPoints(playerPoints + 1);
    } else if (
      playerSelection === "Spock" &&
      (computerSelection === "paper" || computerSelection === "lizard")
    ) {
      console.log("player loses ");
      setComputerPoints(computerPoints + 1);
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
          <InfoBar
            playerName={playerName}
            playerPoints={playerPoints}
            computerPoints={computerPoints}
            handelReset={handelReset}
          />
          <Display playerImage={playerImage} computerImage={computerImage} />
          <ActionBar handelOutcome={handelOutcome}  setPlayerImage={setPlayerImage}/>
        </>
      )}
    </div>
  );
}

export default App;
