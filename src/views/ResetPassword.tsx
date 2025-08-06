import styles from "./styles/page.module.css";
import ResetPasswordForm from "@features/auth/📍_components/forms/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className={`${styles.pageContainer} flex-row-reverse`}>
      <div className={`${styles.formContainer}`}>
        <ResetPasswordForm
          formTitle="Password Reset"
          inputTypes={["text", "password", "password"]}
          labelTexts={["Email", "Password", "Confirm Password"]}
          inputPlaceholders={["your@gmail.com", "password", "confirm password"]}
        />
      </div>
      <div className={`${styles.updatesContainer}`}>
        <div className={`greetings`}>
          <h1>Welcome</h1>
        </div>
        <div className={`new&updates`}>
          <div>Hello</div>
          <div>Bey</div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
