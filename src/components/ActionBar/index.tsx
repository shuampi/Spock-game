import React from "react"
import Button from "../Button"
import style from "./index.module.css"
// import rock from "../../images/rock_left.webp"
// import paper from "../../images/paper_right.png"
// import scissors from "../../images/scissors_left.jpg"
// import lizard from "../../images/Lizard_right.webp"
// import Spock from "../../images/spoke.webp"

interface ActionBarProps{
    handelOutcome:(playerSelection:string)=>void,
    setPlayerSelection?:React.Dispatch<React.SetStateAction<string>>,
    setPlayerImage?:React.Dispatch<React.SetStateAction<string>>,
}

const ActionBar = ({handelOutcome, setPlayerSelection,  setPlayerImage}:ActionBarProps) => {
  return (
    <div className={style.container}>
        <Button radius="5px" padding="0.6em 1.2em" margin="0.2rem 0.4rem" text="Rock" onClick={()=>{handelOutcome('rock'); }}/>
        <Button radius="5px" padding="0.6em 1.2em" margin="0.2rem 0.4rem" text="Paper"  onClick={()=>{handelOutcome('paper'); }}/>
        <Button radius="5px" padding="0.6em 1.2em" margin="0.2rem 0.4rem" text="Scissors"  onClick={()=>{handelOutcome('scissors'); }}/>
        <Button radius="5px" padding="0.6em 1.2em" margin="0.2rem 0.4rem" text="Spock"  onClick={()=>{handelOutcome('Spock'); }}/>
        <Button radius="5px" padding="0.6em 1.2em" margin="0.2rem 0.4rem" text="Lizard"  onClick={()=>{handelOutcome('lizard'); }}/>
    </div>
  )
}

export default ActionBar