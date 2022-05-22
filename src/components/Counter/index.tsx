import style from "./index.module.css"

interface CounterProps{
    playerName:string,
    computerPoints:number,
    playerPoints:number
}

const Counter= ({playerName,playerPoints, computerPoints}:CounterProps) => {
  return (
    <div className={style.container}>
       <p></p> {playerName} points: {playerPoints} <p/>
       <p>Computer points: {computerPoints}</p> 
    </div>
  )
}

export default Counter