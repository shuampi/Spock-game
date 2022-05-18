interface ButtonProps{
    text: string,
    onClick?:(React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({text, onClick}:ButtonProps) => {
  return (
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button