import React, { useState, useRef, useEffect } from 'react';
import noUserImage from "../../assets/images/no-user.webp"
import { useNavigate } from 'react-router-dom';

const PhotoWithOptions: React.FC = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);

  const navigate = useNavigate();

  const handleLogout = () => navigate("/");

  const handleClickOutside = (event: any) => {
    if (
      optionsRef.current &&
      photoRef.current &&
      !optionsRef.current.contains(event.target as Node) &&
      !photoRef.current.contains(event.target as Node)
    ) {
      setIsOptionsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block ">
      <div className="size-8 overflow-hidden rounded-full cursor-pointer">
        <img
          ref={photoRef}
          src={noUserImage}
          alt="Photo"
          className="cursor-pointer"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        />
      </div>
      {isOptionsOpen && (
        <div
          ref={optionsRef}
          className="absolute w-auto top-8 right-2 bg-white border border-gray-300 shadow-lg rounded-lg p-2"
        >
          <button className="block w-full text-left px-4 py-2">Administrador</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Perfil</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            onClick={handleLogout}
          >Salir</button>
        </div>
      )}
    </div>
  );
};

export default PhotoWithOptions;
