import Button from "../Button"
import { useState } from "react"

const UserForm = () => {
const [playerName, setPlayerName] = useState (``)
const handelName = (event:React.FormEvent<HTMLInputElement>) => setPlayerName(event.currentTarget.value) 
console.log('playerName :>> ', playerName);
  return (
    <div>
        <form>
            <label>What is your name?</label>
            <input type='text' onChange={handelName} value={playerName}  required/>
            <Button text="submit"/>
            
        </form>
    </div>
  )
}

export default UserForm