import React from 'react';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor,fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-2 py-3 border text-white font-mono leading-none rounded-full ${
        backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red border-coral-red text-white'
      }${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="" className="ml-2 rounded-full h-5 w-5" />}
    </button>
  );
};

export default Button;
