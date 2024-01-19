-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "hashedRt" TEXT,
    "validEMail" BOOLEAN,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthdaydate" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'driver',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailVerification" (
    "email" TEXT NOT NULL,
    "emailToken" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmailVerification_email_key" ON "EmailVerification"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmailVerification_emailToken_key" ON "EmailVerification"("emailToken");
