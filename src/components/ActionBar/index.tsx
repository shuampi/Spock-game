import React from "react"
import Button from "../Button"
import style from "./index.module.css"
import rock from "../../images/rock_left.webp"
import paper from "../../images/paper_right.png"
import scissors from "../../images/scissors_left.jpg"
import lizard from "../../images/Lizard_right.webp"
import Spock from "../../images/spoke.webp"

interface ActionBarProps{
    handelOutcome:(playerSelection:string)=>void,
    setPlayerSelection?:React.Dispatch<React.SetStateAction<string>>,
    setPlayerImage?:React.Dispatch<React.SetStateAction<string>>,
}

const ActionBar = ({handelOutcome, setPlayerSelection,  setPlayerImage}:ActionBarProps) => {
  return (
    <div className={style.container}>
        <Button text="Rock" onClick={()=>{handelOutcome('rock'); setPlayerImage?.(rock) }}/>
        <Button text="Paper"  onClick={()=>{handelOutcome('paper'); setPlayerImage?.(paper)}}/>
        <Button text="Scissors"  onClick={()=>{handelOutcome('scissors'); setPlayerImage?.(scissors)}}/>
        <Button text="Spock"  onClick={()=>{handelOutcome('Spock'); setPlayerImage?.(Spock)}}/>
        <Button text="Lizard"  onClick={()=>{handelOutcome('lizard'); setPlayerImage?.(lizard)}}/>
    </div>
  )
}

export default ActionBar