import styles from "./styles/page.module.css";
import SignInForm from "@features/auth/📍_components/forms/SignInForm";

const SignUp = () => {
  return (
    <div className={`${styles.pageContainer} flex-row-reverse`}>
      <div className={`${styles.formContainer}`}>
        <SignInForm
          formTitle="Sign In"
          inputTypes={["Email", "password", "password"]}
          labelTexts={["Email", "Password", "Retype Password"]}
          inputPlaceholders={["your@gmail.com", "password", "retype password"]}
        />
      </div>
      <div className={`${styles.updatesContainer}`}>
        <div className="greetings">
          <h1>Welcome Back</h1>
        </div>
        <div>
          <div>Hello</div>
          <div>Bey</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
