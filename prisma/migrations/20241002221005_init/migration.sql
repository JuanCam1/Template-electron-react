-- CreateTable
CREATE TABLE "Role" (
    "id_role" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cedula_usuario" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "apellido_usuario" TEXT NOT NULL,
    "correo_usuario" TEXT NOT NULL,
    "password_usuario" TEXT NOT NULL,
    "id_role" INTEGER,
    CONSTRAINT "Usuario_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "Role" ("id_role") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cedula_usuario_key" ON "Usuario"("cedula_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_usuario_key" ON "Usuario"("correo_usuario");
