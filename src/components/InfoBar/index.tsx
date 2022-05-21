import Button from "../Button"
import Counter from "../Counter"
import style from "./index.module.css"

interface InfoBarProps{
    playerName:string,
    playerPoints:number,
    computerPoints:number
}

const InfoBar = ({playerName, playerPoints,computerPoints}:InfoBarProps) => {
  return (
    <div className={style.container}>
        <Counter playerName={playerName} playerPoints={playerPoints} computerPoints={computerPoints}/>
        <Button text="Reset" color="red" />
    </div>
  )
}

export default InfoBar