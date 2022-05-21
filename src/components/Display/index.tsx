import Image from "../Image"
interface DisplayProps{
  playerImage:string,
  computerImage:string
}
const Display = ({playerImage,computerImage}:DisplayProps) => {
  return (
    <div>
<Image src={playerImage} alt="incognito" width="200px" height="200px"/>
<h1>VS.</h1>
<Image src={computerImage} alt="incognito" width="200px" height="200px"/>
    </div>
  )
}

export default Display