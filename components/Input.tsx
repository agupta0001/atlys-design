import { FC } from "react";
import cn from "classnames";

interface IInputProps {
  name: string;
  label?: string;
  secondaryLabel?: string | JSX.Element;
  type?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  [key: string]: any;
}

const Input: FC<IInputProps> = ({
  name,
  label,
  secondaryLabel,
  type = "text",
  placeholder,
  className,
  inputClassName,
  ...restProps
}) => {
  return (
    <div className={cn("input-comp flex flex-col gap-2", className)}>
      <div className="flex justify-between items-center">
        {!!label && (
          <label htmlFor={name} className="text-gray-3 text-sm">
            {label}
          </label>
        )}
        {!!secondaryLabel && <>{secondaryLabel}</>}
      </div>
      <input
        id={name}
        required
        className={cn(
          "px-3 py-2 placeholder:text-gray-4 rounded-md border-2 border-gray-5 bg-transparent outline-none",
          inputClassName
        )}
        type={type}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default Input;
