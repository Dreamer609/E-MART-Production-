import styles from "./styles/AuthSubmitButton.module.css";

interface ButtonProps {
  btnText: string;
  btnClass?: string;
  containerClass?: string;
}

const AuthSubmitButton = ({
  containerClass,
  btnClass,
  btnText,
}: ButtonProps) => {
  return (
    <div className={`${containerClass} ${styles.btnContainer}`}>
      <button type="submit" className={`${btnClass}`}>
        {btnText}
      </button>
    </div>
  );
};

export default AuthSubmitButton;
