import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./styles/AuthField.module.css";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldType: string;
  buttonIcon?: ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  label: {
    text: string;
    htmlFor: string;
  };
}

const AuthField = ({
  fieldType,
  buttonIcon,
  label,
  ...props
}: FormFieldProps) => {
  const [getType, setType] = useState(fieldType);
  const changeVisibility = () =>
    setType((prevType) => (prevType === "password" ? "text" : "password"));

  return (
    <div className={`${styles.fieldContainer}`}>
      <label
        htmlFor={label.htmlFor}
        className={`${styles.fieldLabel} text-sm font-medium`}
      >
        {label.text}
      </label>
      <div className={`${styles.fieldWrapper} relative`}>
        <input
          type={getType}
          className={`${styles.field}`}
          id={label.htmlFor}
          {...props}
        />
        {fieldType === "password" && buttonIcon && (
          <button
            type="button"
            onClick={changeVisibility}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2`}
          >
            {buttonIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthField;
