import Image from "../Image"
import style from "./index.module.css"
interface DisplayProps{
  playerImage:string,
  computerImage:string
}
const Display = ({playerImage,computerImage}:DisplayProps) => {
  return (
    <div className={style.container}>
<Image src={playerImage} alt="incognito" width="200px" height="200px"/>
<h1>VS.</h1>
<Image src={computerImage} alt="incognito" width="200px" height="200px"/>
    </div>
  )
}

export default Display