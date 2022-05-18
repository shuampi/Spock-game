import Button from "../Button"

interface UserFormProps {
  handelName:(event:React.FormEvent<HTMLInputElement>) => void,
  playerName:string,
  handelSubmit:
}

const UserForm = ({handelName,playerName, handelSubmit}:UserFormProps) => {

console.log('playerName :>> ', playerName);
  return (
    <div>
        <form>
            <label>What is your name?</label>
            <input type='text' onChange={handelName} value={playerName}  required/>
            <Button text="submit" />
            
        </form>
    </div>
  )
}

export default UserForm