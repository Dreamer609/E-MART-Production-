import styles from "./_styles/_Button.module.css";

interface ButtonProps {
  btnText: string;
  btnClass?: string;
  containerClass?: string;
}

export const ButtonFC = ({
  containerClass,
  btnClass,
  btnText,
}: ButtonProps) => {
  return (
    <div className={`${containerClass} ${styles.btnContainer}`}>
      <button type="button" className={`${btnClass}`}>
        {btnText}
      </button>
    </div>
  );
};

export default ButtonFC;
