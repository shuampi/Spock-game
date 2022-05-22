import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  color?: string,
  border?: string,
  radius?: string,
  width?: string,
  padding?:string,
  maxWidth?:string,
  margin?:string
}

const Button = ({ text, onClick,color,radius, width, border,padding, maxWidth, margin }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border: border,
        borderRadius: radius,
        width,
        padding,
        maxWidth,
        margin
      }}
      onClick={onClick}
      
    >
      {text}
    </button>
  );
};

export default Button;
