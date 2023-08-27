import { FC, MouseEventHandler } from "react";
import cn from "classnames";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button: FC<ButtonProps> = ({
  text,
  type = "button",
  className,
  onClick,
  ...restProps
}) => {
  return (
    <button
      onClick={onClick || undefined}
      className={cn("bg-blue-1 rounded-md py-2 px-3", className)}
      type={type}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
