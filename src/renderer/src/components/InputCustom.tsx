import { InputHTMLAttributes, FC } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  classStyle?: string | null;
}

const InputCustom: FC<InputProps> = ({
  type = "text",
  placeholder,
  classStyle = null,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder || undefined}
      className={`outline-none block w-full border border-gray-300 rounded-lg shadow-sm p-2 ${classStyle || ""}`}
      {...props}
    />
  );
};

export default InputCustom;
