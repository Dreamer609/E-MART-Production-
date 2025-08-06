import styles from "./_styles/_Button.module.css";

interface ButtonProps {
  btnText: string;
  btnClass?: string;
  containerClass?: string;
}

export const Button = ({
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

export default Button;
