import React, { type InputHTMLAttributes, type ReactNode } from "react";
import style from "./SearchBox.module.css";

interface ProductSearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  buttonIcon: ReactNode;
  onButtonClick?: () => void;
}

const InputBox: React.FC<ProductSearchInputProps> = ({
  type = "text",
  buttonIcon,
  onButtonClick,
  ...props
}) => {
  return (
      <div
        className={`${style.inputConatiner} border-1 rounded-full lg:min-w-120 md:min-w-100 max-w-70`}
      >
        <input
          type={type}
          className={`${style.searchField} text-sm`}
          {...props}
        />
        {buttonIcon && (
          <button
            type="button"
            onClick={onButtonClick}
            className={`${style.searchBtn}`}
          >
            {buttonIcon}
          </button>
        )}
      </div>
  );
};

export default InputBox;
