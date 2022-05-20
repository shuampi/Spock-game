import Button from "../Button"
import style from "./index.module.css"

const ActionBar = () => {
  return (
    <div className={style.container}>
        <Button text="Rock"/>
        <Button text="Paper"/>
        <Button text="Scissors"/>
        <Button text="Spoke"/>
        <Button text="Lizard"/>
    </div>
  )
}

export default ActionBar