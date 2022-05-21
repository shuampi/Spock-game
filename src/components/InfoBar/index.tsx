import Button from "../Button"
import Counter from "../Counter"
import style from "./index.module.css"

interface InfoBarProps{
    playerName:string,
    playerPoints:number,
    computerPoints:number,
    handelReset:()=>void
}

const InfoBar = ({playerName, playerPoints,computerPoints, handelReset}:InfoBarProps) => {
  return (
    <div className={style.container}>
        <Counter playerName={playerName} playerPoints={playerPoints} computerPoints={computerPoints}/>
        <Button text="Reset" color="red" onClick={handelReset}/>
    </div>
  )
}

export default InfoBar