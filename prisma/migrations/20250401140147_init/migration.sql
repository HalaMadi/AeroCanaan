-- CreateTable
CREATE TABLE
    "User" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "role" TEXT NOT NULL DEFAULT 'USER'
    );

-- CreateTable
CREATE TABLE
    "Trip" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "destination" TEXT NOT NULL,
        "duration" INTEGER NOT NULL,
        "start_date" DATETIME NOT NULL,
        "end_date" DATETIME NOT NULL,
        "price" REAL NOT NULL,
        "seats" INTEGER NOT NULL
    );

-- CreateTable
CREATE TABLE
    "Booking" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "userId" TEXT NOT NULL,
        "tripId" TEXT NOT NULL,
        "status" TEXT NOT NULL DEFAULT 'PENDING',
        CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT "Booking_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip" ("id") ON DELETE CASCADE ON UPDATE CASCADE
    );

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");