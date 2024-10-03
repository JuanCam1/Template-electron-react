import { useState } from "react";
import noUserImage from "../../assets/images/no-user.webp";
import logo from "../../assets/images/favicon.webp";
import PhotoWithOptions from "./PhotoWithOptions";
import { profilePayload } from "../../constants/role.constant";

const Navbar = () => {
  // const [userImage, setUserImage] = useState("");
  const [userImage, setUserImage] = useState(noUserImage);
  const [isModalOpen, setModalOpen] = useState(false);
  const userName = "Juan";
  // const userIdPayload = useAuthStore((state) => state.dataUser?.userIdPayload || "0");
  // const userName = useAuthStore((state) => state.dataUser?.namePayload || "No user");
  // const photoPayload = useAuthStore((state) => state.dataUser?.photoPayload || "sinphoto.jpg");
  // const profilePayload = useAuthStore((state) => state.dataUser?.profilePayload || "Funcionario");
  // const pathUrl = import.meta.env.VITE_API_URL + "/users/getImage/";

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     if (photoPayload !== "sinphoto.jpg") {
  //       try {
  //         const { data } = await instance.get(pathUrl + photoPayload, {
  //           responseType: "blob"
  //         });
  //         setUserImage(URL.createObjectURL(data));
  //       } catch (error) {
  //         setUserImage(noUserImage);
  //       }
  //     } else {
  //       setUserImage(noUserImage);
  //     }
  //   };

  //   fetchImage();
  // }, []);

  return (
    <header className="h-16 fixed bg-white w-full border-b z-30">
      <nav className="flex pr-8 pl-7 max-md:px-2 py-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-16 max-md:w-10 overflow-hidden flex items-center ">
            <div className="w-full ">
              <img src={logo} className="object-cover " />
            </div>
          </div>

          <div className="h-full w-[0.5px] bg-gray-200 py-3"></div>
          <h2 className="text-colorSecundary text-base font-Montserrat font-semibold max-md:text-sm lg:text-lg capitalize">
            Sistema de Control de Horas Misionales
          </h2>
        </div>
        <div className="flex items-center gap-4 max-md:hidden">
          <h2 className="text-colorSecundary font-Montserrat text-xs font-semibold">
            {userName} {profilePayload}
          </h2>
          <PhotoWithOptions />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
