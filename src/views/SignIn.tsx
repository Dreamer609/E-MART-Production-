import styles from "./styles/SignUp.module.css"
import SignInForm from "@features/auth/📍_components/forms/SignInForm";

const SignUp = () => {
  return (
    <div className={`${styles.SignUpContainer} flex-row-reverse`}>
      <div className={`${styles.formContainer}`}>
        <SignInForm
          formTitle="Sign In"
          inputTypes={["Email", "password", "password"]}
          labelTexts={["Email", "Password", "Retype Password"]}
          inputPlaceholders={["your@gmail.com", "password", "retype password"]}
        />
      </div>
      <div className={`${styles.updatesContainer}`}>Updates</div>
    </div>
  );
};

export default SignUp;