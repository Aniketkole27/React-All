import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ lable, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
        {lable && (
          <lable className="inline-block mb-1 pl-1" htmlFor={id}>
            {lable}
          </lable>
        )}

        <input
          type={type}
          className={` px-3 py-2 rounded-lg bg-[#0f172bda] text-gray-200 outline-none focus:bg-[#0f172b] duration-200 border border-gray-600 w-full 
            ${className}`}
            ref={ref}
            id={id}
            {...props}
        />
      </div>
    );
  }
);

export default Input;
