import logo from "../../assets/electron.svg";
import LoginSection from "./sections/LoginSection";

const LoginPage = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-gray-200">
      <article className="bg-white border flex flex-col p-6 rounded-md shadow-md md:w-[450px] lg:w-[400px] max-md:w-full max-md:py-8 max-md:h-screen max-md:pt-20">
        <div>
          <div className="flex h-30 w-full items-center justify-center gap-5 mb-8 overflow-hidden">
            <div className="w-[60%] max-md:w-[70%] aspect-video aspect-h-9">
              <img src={logo} className="object-cover w-full h-full" alt="logo uts" />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-center font-extrabold text-2xl text-colorSecundary">Bienvenido!</h2>
            <p className="text-colorSecundary text-center font-semibold text-[18px] mb-1 max-md:text-[20px]">
              Inicie sesión con tu cuenta
            </p>
          </div>
        </div>

        <LoginSection />
      </article>
    </section>
  );
};
export default LoginPage;
