import FormField from "../shared/AuthField";
import Icon from "src/🌍_components/ui/Icon";
import styles from "./styles/form.module.css";
import { Link } from "react-router-dom";
import Button from "../shared/AuthSubmitButton";

interface FormProps {
  formTitle: string;
  inputTypes: string[];
  labelTexts: string[];
  inputPlaceholders: string[];
  btnText?: string;
}

const LoginForm = ({
  formTitle,
  inputTypes,
  labelTexts,
  btnText,
  inputPlaceholders,
}: FormProps) => {
  return (
    <form action="#" className={`min-h-120 w-80 ${styles.form}`}>
      <div className={`${styles.formHeader} w-full my-6 text-2xl`}>
        <h2 className="mx-8">{formTitle}</h2>
      </div>
      <div className="w-full">
        {inputTypes.map((inputType, index) => (
          <FormField
            key={`${inputType}-${index}`}
            fieldType={inputType}
            label={{
              text: labelTexts[index],
              htmlFor: inputType,
            }}
            buttonIcon={
              <Icon name="visible" className="w-2 h-2 cursor-pointer" />
            }
            placeholder={inputPlaceholders[index]}
          />
        ))}

        <div className={`${styles.rememberCheckContainer}`}>
          <div className={`${styles.remember} gap-1`}>
            <input type="checkbox" title="check" />
            <span className={`text-sm`}>Remember me</span>
          </div>
          <div className="text-[12px] text-[var(--primary-sky-blue)]">
            <Link to="#">Forgot Password</Link>
          </div>
        </div>
      </div>
      <div className="SubmitBtn w-full">
        <Button btnText={btnText || "Submit"} />
      </div>
      <div className={``}></div>
    </form>
  );
};

export default LoginForm;
