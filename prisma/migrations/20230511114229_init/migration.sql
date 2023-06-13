-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);
