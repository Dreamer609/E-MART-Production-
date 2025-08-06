import styles from "./styles/SignUp.module.css";
import SignUpForm from "@features/auth/📍_components/forms/SignUpForm";

const SignUp = () => {
  return (
    <div className={`${styles.SignUpContainer} flex-row-reverse`}>
      <div className={`${styles.formContainer}`}>
        <SignUpForm
          formTitle="Sign Up"
          inputTypes={["text", "email", "password"]}
          labelTexts={["Name", "Email", "Password"]}
          inputPlaceholders={["your name", "your@gmail.com", "password"]}
        />
      </div>
      <div className={`${styles.updatesContainer}`}>Updates</div>
    </div>
  );
};

export default SignUp;
