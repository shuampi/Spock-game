import Image from "../Image"
import style from "./index.module.css"
interface DisplayProps{
  playerImage:string,
  computerImage:string,
showAside:boolean,
displayMessage:string
}
const Display = ({playerImage,computerImage,showAside,displayMessage}:DisplayProps) => {
  return (
    <div>
      <aside className={style.aside}>
   {showAside && (<h1>{displayMessage}</h1>)}
      </aside>
      <section  className={style.container}>
<Image src={playerImage} alt="incognito" width="200px" height="200px"/>
<h1>VS.</h1>
<Image src={computerImage} alt="incognito" width="200px" height="200px"/>
</section>
    </div>
  )
}

export default Display