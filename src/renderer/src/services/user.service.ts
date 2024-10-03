import { Usuario } from "@prisma/client";

export const getUsers = async (): Promise<Usuario[]> => {
  const users = await window.electron.ipcRenderer.invoke("get-users");
  return users;
};
