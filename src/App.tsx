
import UserForm from './components/UserForm';
import { useState, ChangeEvent, FormEventHandler } from "react"

function App() {
  const [showForm, setShowForm] = useState(true)
  const [playerName, setPlayerName] = useState (``)
  const handelName = (event:ChangeEvent<HTMLInputElement>) => setPlayerName(event.currentTarget.value) 
  const handelSubmit:FormEventHandler = () =>{}
  return (
    <div >
      <h1>Welcome to rock, paper, scissors, lizard, Spoke game!</h1>
     <UserForm handelName={handelName} playerName={playerName} handelSubmit={handelSubmit}/>
    </div>
  );
}

export default App;
