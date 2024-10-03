import ButtonCustom from "@renderer/components/ButtonCustom";
import InputCustom from "@renderer/components/InputCustom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleIsVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const goHome = () => {
    navigate("/home");
  };
  return (
    <form className="flex flex-col">
      <div className="mb-4">
        <label htmlFor="email" className="text-xs font-bold max-md:text-sm">
          Correo electrónico
        </label>

        <InputCustom autoFocus name="email" id="email" placeholder="correo@correo.com" />
      </div>

      <div>
        <label htmlFor="password" className="text-xs font-bold max-md:text-sm">
          Contraseña
        </label>

        <div className="flex flex-row border items-center text-gray-900 text-sm rounded-lg  w-full h-11 mb-8 border-gray-300">
          <input
            name="password"
            id="password"
            type={isVisible ? "password" : "text"}
            placeholder="******"
            className="h-full p-2 text-sm w-[90%] outline-none rounded-lg "
          />
          {isVisible ? (
            <span onClick={handleIsVisible} className="p-2 cursor-pointer">
              <FaEye size={20} color="#562b78" />
            </span>
          ) : (
            <span onClick={handleIsVisible} className="p-2  cursor-pointer">
              <FaEyeSlash size={20} color="#562b78" />
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonCustom
          onClick={goHome}
          textWeight="font-semibold"
          textColor="max-md:text-white text-white"
          widthButton="max-md:w-full w-[60%]"
          bgButton="bg-blue-500"
          bgButtonHover="hover:bg-blue-600"
          text="Iniciar Sesión"
          textSize="text-[13px]"
        />
      </div>
    </form>
  );
};
export default LoginSection;
