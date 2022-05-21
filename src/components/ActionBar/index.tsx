import React from "react"
import Button from "../Button"
import style from "./index.module.css"
interface ActionBarProps{
    handelOutcome:()=>void,
    setPlayerSelection:React.Dispatch<React.SetStateAction<string>>
}

const ActionBar = ({handelOutcome, setPlayerSelection}:ActionBarProps) => {
  return (
    <div className={style.container}>
        <Button text="Rock" onClick={()=>{setPlayerSelection('rock') ;handelOutcome()}}/>
        <Button text="Paper"  onClick={()=>{setPlayerSelection('paper') ;handelOutcome()}}/>
        <Button text="Scissors"  onClick={()=>{setPlayerSelection('scissors') ;handelOutcome()}}/>
        <Button text="Spock"  onClick={()=>{setPlayerSelection('Spock') ;handelOutcome()}}/>
        <Button text="Lizard"  onClick={()=>{setPlayerSelection('lizard') ;handelOutcome()}}/>
    </div>
  )
}

export default ActionBar