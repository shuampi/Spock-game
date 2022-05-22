import Button from "../Button"
import style from "./index.module.css"
import {ChangeEvent, FormEventHandler, } from 'react'

interface UserFormProps {
  handelName:(event:ChangeEvent<HTMLInputElement>) => void,
  playerName:string,
  handelSubmit:FormEventHandler
}

const UserForm = ({handelName,playerName, handelSubmit}:UserFormProps) => {

console.log('playerName :>> ', playerName);
  return (
    <div className={style.container}>
        <form onSubmit={handelSubmit}>
            <label className={style.label}>What is your name?</label>
            <div className={style.inputButton}>
            <input type='text' onChange={handelName} value={playerName}  required/>
            <Button text="submit" radius="7px" color="#82DBD8" padding="1em 1em" maxWidth="100px" /> 
            </div> 
        </form>
    </div>
  )
}

export default UserForm