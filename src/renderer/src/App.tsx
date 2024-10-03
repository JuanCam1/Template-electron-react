import { useEffect, useState } from "react";
import { Usuario } from "@prisma/client";
import { getUsers } from "./services/user.service";

function App(): JSX.Element {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const dataUsers = await getUsers();
        setUsuarios(dataUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  console.log(usuarios);
  return (
    <main className="bg-red-400 h-screen">
      <h2>React y Electron</h2>
    </main>
  );
}

export default App;
