
import UserForm from './components/UserForm';
import { useState } from "react"

function App() {
  const [showForm, setShowForm] = useState(true)
  const [playerName, setPlayerName] = useState (``)
  const handelName = (event:React.FormEvent<HTMLInputElement>) => setPlayerName(event.currentTarget.value) 
  const handelSubmit = () =>{}
  return (
    <div >
      <h1>Welcome to rock, paper, scissors, lizard, Spoke game!</h1>
     <UserForm handelName={handelName} playerName={playerName} handelSubmit={handelSubmit}/>
    </div>
  );
}

export default App;
