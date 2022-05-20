import Button from "../Button"
import {ChangeEvent, FormEventHandler, } from 'react'

interface UserFormProps {
  handelName:(event:ChangeEvent<HTMLInputElement>) => void,
  playerName:string,
  handelSubmit:FormEventHandler
}

const UserForm = ({handelName,playerName, handelSubmit}:UserFormProps) => {

console.log('playerName :>> ', playerName);
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <label>What is your name?</label>
            <input type='text' onChange={handelName} value={playerName}  required/>
            <Button text="submit" radius="7px" color="lightblue" />
            
        </form>
    </div>
  )
}

export default UserForm