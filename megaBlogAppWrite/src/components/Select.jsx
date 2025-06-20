import React, { forwardRef, useId } from "react";

function Select({ options, lable, className, ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {lable && <lable htmlFor={id} className={`${className}`}></lable>}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg  bg-[#0f172bda] text-gray-200 outline-none focus:bg-[#0f172bda] duration-200 border border-gray-500 w-full
             ${className}`}
      >
        {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  );
}
export default forwardRef(Select)
