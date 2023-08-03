import * as React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white text-gray-800"
    />
  );
});
Input.displayName = "Input";

export default Input;
