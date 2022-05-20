//import style from "./index.module.css"
interface ImageProps{
    alt:string,
    src:string,
    width:string,
    height:string,
    
}

const Image = ({alt, src, width, height,}:ImageProps) => {
  return (
    <img style={{width, height }} alt={alt} src={src}/>
  )
}

export default Image