interface CounterProps{
    playerName:string
}

const Counter= ({playerName}:CounterProps) => {
  return (
    <div>
        {playerName} points:
        Computer points:
    </div>
  )
}

export default Counter