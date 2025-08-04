import FormField from "@components/ui/form_ui/_Input";
import Icon from "@components/ui/Icon"
import styles from "./_styles/form.module.css"
import { Link } from "react-router-dom";


interface FormProps {
  formTitle: string;
  inputTypes: string[];
  labelTexts: string[];
  inputPlaceholders: string[];
}

const Form = ({
  formTitle,
  inputTypes,
  labelTexts,
  inputPlaceholders,
}: FormProps) => {
  return (
    <form action="/home" className={`min-h-120 w-80 ${styles.form}`}>
      <div className="form-header">
        <h2>{formTitle}</h2>
      </div>
      <div className="inputs-wrapper">
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

        <div className={`${styles.termsCheckContainer} gap-1`}>
          <input type="checkbox" title="check" />
          <span className={`text-sm`}>
            agree to
            <Link to="/" className={`text-cyan-500`}>Terms & Condition</Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Form;
