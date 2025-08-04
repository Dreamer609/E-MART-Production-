import styles from "./_styles/SignUp.module.css"
import Form from "@components/shared/form"

const SignIn = () => {
  return (
    <div
      className={`${styles.SignUpContainer} flex-row-reverse`}
    >
      <div className={`${styles.formContainer}`}>
        <Form
          formTitle="Sign Up"
          inputTypes={["text", "email", "password"]}
          labelTexts={["Name", "Email", "Password"]}
          inputPlaceholders={["enter name", "your@gmail.com", "password"]}
        />
      </div>
      <div className={`${styles.updatesContainer}`}>
        Updates
      </div>
    </div>
  );
}

export default SignIn;