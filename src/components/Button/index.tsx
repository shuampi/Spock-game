import { MouseEventHandler } from "react"

interface ButtonProps{
    text: string,
    onClick?:(MouseEventHandler<HTMLButtonElement>) 
}

const Button = ({text, onClick}:ButtonProps) => {
  return (
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button