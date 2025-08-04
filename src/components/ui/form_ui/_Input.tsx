import { type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./_Input.module.css"

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

const FormField = ({
  fieldType,
  buttonIcon,
  label,
  ...props
}: FormFieldProps) => {
  return (
    <div className={`w-full ${styles.fieldContainer}`}>
      <label htmlFor={label.htmlFor}>
        {label.text}
      </label>
      <div className="relative">
        <input
          type={fieldType}
          className={`${styles.field}`}
          id={label.htmlFor}
          {...props}
        />
        {fieldType === "password" && buttonIcon && (
          <button
            type="button"
            className={`absolute right-2 top-1/2 transform -translate-y-1/2`}
          >
            {buttonIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
