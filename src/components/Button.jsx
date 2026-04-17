import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,246,255,0.45)]
      active:scale-95
      cursor-pointer ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
