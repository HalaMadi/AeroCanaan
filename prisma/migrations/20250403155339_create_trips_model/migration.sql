/*
  Warnings:

  - You are about to drop the column `name` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `image` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "location" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "seats" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Trip" ("destination", "duration", "end_date", "id", "price", "seats", "start_date") SELECT "destination", "duration", "end_date", "id", "price", "seats", "start_date" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Place_slug_key" ON "Place"("slug");
