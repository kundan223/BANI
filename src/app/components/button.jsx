// components/Button.jsx
import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 border border-black rounded-md text-black font-bold font-b612Mono text-sm hover:bg-black hover:text-white transition">
      {children}
    </button>
  );
};

export default Button;
