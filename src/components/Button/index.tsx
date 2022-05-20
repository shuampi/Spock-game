import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  color?: string,
  border?: string,
  radius?: string,
  width?: string,
}

const Button = ({ text, onClick,color,radius, width, border }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border: border,
        borderRadius: radius,
        width,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
