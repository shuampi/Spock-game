import Image from "../Image"
import incognito from "../../images/incognito.png"

const Display = () => {
  return (
    <div>
<Image src={incognito} alt="incognito" width="200px" height="200px"/>
<h1>VS.</h1>
<Image src={incognito} alt="incognito" width="200px" height="200px"/>
    </div>
  )
}

export default Display