import Button from "../Button"
import style from "./index.module.css"
interface ActionBarProps{
    handelOutcome:()=>void
}

const ActionBar = ({handelOutcome}:ActionBarProps) => {
  return (
    <div className={style.container}>
        <Button text="Rock" onClick={handelOutcome}/>
        <Button text="Paper"/>
        <Button text="Scissors"/>
        <Button text="Spoke"/>
        <Button text="Lizard"/>
    </div>
  )
}

export default ActionBar