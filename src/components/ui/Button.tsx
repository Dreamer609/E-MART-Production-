import React from 'react'
interface ButtonProps {
   btnLable: string
   btnClass: string;
   containerClass: string;
}

export const ButtonFC = ({containerClass, btnClass, btnLable}: ButtonProps) => {
  return (
    <div className={`${containerClass}`}>
      <button type="button" className={`${btnClass}`}>
        {btnLable}
      </button>
    </div>
  );
}

export default ButtonFC;