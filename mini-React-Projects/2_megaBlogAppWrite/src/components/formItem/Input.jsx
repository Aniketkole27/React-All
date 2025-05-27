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
          className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full 
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
