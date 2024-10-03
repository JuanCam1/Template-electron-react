import { app, shell, BrowserWindow, ipcMain, screen } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import icon from "../../resources/icon.png?asset";
import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient();

async function createDefaultUserIfNoneExists() {
  try {
    const userCount = await prisma.usuario.count();

    if (userCount === 0) {
      // Crear un usuario por defecto si no existen usuarios
      await prisma.usuario.create({
        data: {
          id_usuario: 1,
          nombre_usuario: "Juan",
          apellido_usuario: "Rojas",
          correo_usuario: "admin@gmail.com",
          password_usuario: "password",
          cedula_usuario: "1095951845",
          id_role: 1
        }
      });
      console.log("Usuario por defecto creado");
    } else {
      console.log("Usuarios ya existen en la base de datos");
    }
  } catch (error) {
    console.error("Error al verificar o crear el usuario por defecto:", error);
  }
}

function createWindow(): void {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    width,
    height,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });

  mainWindow.maximize();
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }

  createDefaultUserIfNoneExists();
}

ipcMain.handle("create-user", async (_event, user: Usuario) => {
  return await prisma.usuario.create({
    data: user
  });
});

ipcMain.handle("get-users", async () => {
  return await prisma.usuario.findMany();
});

app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
