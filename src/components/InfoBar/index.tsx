import Button from "../Button"
import Counter from "../Counter"
import style from "./index.module.css"

interface InfoBarProps{
    playerName:string
}

const InfoBar = ({playerName}:InfoBarProps) => {
  return (
    <div className={style.container}>
        <Counter playerName={playerName}/>
        <Button text="Reset" color="red" />
    </div>
  )
}

export default InfoBar