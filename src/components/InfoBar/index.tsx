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
        <Button text="Reset" color="#EE5007" onClick={handelReset} radius="5px" padding="0.5em 1em" margin="1.4rem 0rem"/>
    </div>
  )
}

export default InfoBar