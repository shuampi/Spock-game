import React from "react"
import Button from "../Button"
import style from "./index.module.css"
interface ActionBarProps{
    handelOutcome:(playerSelection:string)=>void,
    setPlayerSelection?:React.Dispatch<React.SetStateAction<string>>
}

const ActionBar = ({handelOutcome, setPlayerSelection}:ActionBarProps) => {
  return (
    <div className={style.container}>
        <Button text="Rock" onClick={()=>{handelOutcome('rock')}}/>
        <Button text="Paper"  onClick={()=>{handelOutcome('paper')}}/>
        <Button text="Scissors"  onClick={()=>{handelOutcome('scissors')}}/>
        <Button text="Spock"  onClick={()=>{handelOutcome('Spock')}}/>
        <Button text="Lizard"  onClick={()=>{handelOutcome('lizard')}}/>
    </div>
  )
}

export default ActionBar