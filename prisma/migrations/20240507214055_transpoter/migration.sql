/*
  Warnings:

  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'DRIVER', 'ADMIN');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Transporter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameOfVehicle" TEXT NOT NULL,
    "yearOfManufacture" TIMESTAMP(3),
    "registrationNumber" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Transporter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transporter_name_key" ON "Transporter"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Transporter_userId_key" ON "Transporter"("userId");

-- AddForeignKey
ALTER TABLE "Transporter" ADD CONSTRAINT "Transporter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
