import Button from "../Button"
import Counter from "../Counter"

interface InfoBarProps{
    playerName:string
}

const InfoBar = ({playerName}:InfoBarProps) => {
  return (
    <div>
        <Counter playerName={playerName}/>
        <Button text="Reset"/>
    </div>
  )
}

export default InfoBar