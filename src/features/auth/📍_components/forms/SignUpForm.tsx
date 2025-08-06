import AuthField from "../shared/AuthField";
import Icon from "@components/ui/Icon";
import styles from "./styles/form.module.css";
import { Link } from "react-router-dom";
import AuthSubmitButton from "../shared/AuthSubmitButton";
import OAuthLinks from "../shared/OAuthLinks";

interface FormProps {
  formTitle: string;
  inputTypes: string[];
  labelTexts: string[];
  inputPlaceholders: string[];
  btnText?: string;
}

const SignUpForm = ({
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
          <AuthField
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
            <Link to="#" className={`text-[var(--primary-sky-blue)] mx-1`}>
              Terms & Condition
            </Link>
          </span>
        </div>
      </div>
      <div className="SubmitBtn w-full">
        <AuthSubmitButton btnText={btnText || "Register"} />
      </div>
      <div className="signUpAlternatives w-full my-4">
        <OAuthLinks providers={["google", "facebook", "twitter"]} />
      </div>
      <div className={`${styles.haveAccount} text-sm gap-1`}>
        <span>Already Have an account?</span>
        <Link to="/signin" className="text-[var(--primary-sky-blue)]">
          SignIn
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
