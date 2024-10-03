import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  paddingYBottom?: string;
  paddingXBottom?: string;
  widthButton?: string;
  bgButton?: string;
  bgButtonHover?: string;
  text: string;
  textWeight?: string;
  textColor?: string;
  textSize?: string;
}

const ButtonCustom: FC<ButtonCustomProps> = ({
  isLoading = false,
  isDisabled = false,
  paddingYBottom = "py-[7px]",
  paddingXBottom = "px-0",
  widthButton = "w-[90%]",
  bgButton = "bg-seance-500",
  bgButtonHover = "hover:bg-seance-600",
  text,
  type = "button",
  textWeight = "font-normal",
  textColor = "text-white",
  textSize = "text-xs",
  ...props
}) => {
  const buttonClass = classNames(
    "rounded-lg py-4 cursor-pointer h-10",
    widthButton,
    bgButton,
    bgButtonHover,
    textWeight,
    paddingYBottom,
    paddingXBottom,
    type
  );

  const textClass = classNames("text-center", textColor, textSize);
  return (
    <button type={type} className={buttonClass} disabled={isDisabled} {...props}>
      {isLoading ?
        <div className="flex items-center justify-center ">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
        </div>
        : <span className={textClass}>{text}</span>
      }
    </button>
  );
};

export default ButtonCustom;
