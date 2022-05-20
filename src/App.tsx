import UserForm from "./components/UserForm";
import { useState, ChangeEvent, FormEventHandler } from "react";
import InfoBar from "./components/InfoBar";
import Display from "./components/Display";

function App() {
  const [showForm, setShowForm] = useState(true);
 // const [showGame, setShowGame] = useState(false); // when submit name hide form and will show the game
  const [playerName, setPlayerName] = useState(``);

  const handelName = (event: ChangeEvent<HTMLInputElement>) =>
    setPlayerName(event.currentTarget.value);

  const handelSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setShowForm(!showForm)
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
      <InfoBar playerName={playerName}/>
      <Display/>
    </div>
  );
}

export default App;
