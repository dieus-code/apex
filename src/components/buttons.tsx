import React, { ReactNode } from "react";  
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full  bg-[#335CFF] hover:bg-[#2349E6] text-white font-semibold px-[10px] py-[10px] border transition duration-300 rounded-[10px]"
     
    >
      {children}
    </button>
  );
}