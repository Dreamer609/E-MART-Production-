import React, { useState, type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email";
  buttonIcon?: ReactNode;
  divClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  lable:{
    text: string;
    htmlFor: string;
  }
}

const InputFC = ({
  type,
  buttonIcon,
  divClassName = "",
  inputClassName = "",
  buttonClassName = "",
  lable,
  ...props
}: InputProps) => {
  const [getType, setType] = useState(type);

  return (
    <div className="w-full">
      <div className={`relative ${divClassName}`}>
        <input type={getType} className={inputClassName} {...props} />
        {type === "password" || buttonIcon && (
          <button type="button" className={buttonClassName}>
            {buttonIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputFC;
