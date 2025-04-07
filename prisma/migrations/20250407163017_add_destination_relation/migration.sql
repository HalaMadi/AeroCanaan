/*
  Warnings:

  - You are about to drop the column `image` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Place` table. All the data in the column will be lost.
  - Added the required column `accessibilityInfo` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bestTimeToVisit` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullDesc` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localTips` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDesc` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationId` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,
    CONSTRAINT "Image_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Place" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,
    "fullDesc" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "bestTimeToVisit" TEXT NOT NULL,
    "accessibilityInfo" TEXT NOT NULL,
    "localTips" TEXT NOT NULL
);
INSERT INTO "new_Place" ("id", "location", "name", "slug") SELECT "id", "location", "name", "slug" FROM "Place";
DROP TABLE "Place";
ALTER TABLE "new_Place" RENAME TO "Place";
CREATE UNIQUE INDEX "Place_slug_key" ON "Place"("slug");
CREATE TABLE "new_Trip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "originalPrice" REAL,
    "discountPrice" REAL,
    "seats" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isSpecialOffer" BOOLEAN NOT NULL DEFAULT false,
    "hasDiscount" BOOLEAN NOT NULL DEFAULT false,
    "destinationId" TEXT ,
    CONSTRAINT "Trip_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Place" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Trip" ("description", "destination", "discountPrice", "duration", "end_date", "featured", "hasDiscount", "id", "image", "isFeatured", "isSpecialOffer", "originalPrice", "price", "rating", "seats", "slug", "start_date", "title") SELECT "description", "destination", "discountPrice", "duration", "end_date", "featured", "hasDiscount", "id", "image", "isFeatured", "isSpecialOffer", "originalPrice", "price", "rating", "seats", "slug", "start_date", "title" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
