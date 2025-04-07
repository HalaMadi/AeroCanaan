/*
  Warnings:

  - You are about to drop the column `destinationId` on the `Trip` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
    "placeId" TEXT,
    CONSTRAINT "Trip_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Trip" ("description", "destination", "discountPrice", "duration", "end_date", "featured", "hasDiscount", "id", "image", "isFeatured", "isSpecialOffer", "originalPrice", "price", "rating", "seats", "slug", "start_date", "title") SELECT "description", "destination", "discountPrice", "duration", "end_date", "featured", "hasDiscount", "id", "image", "isFeatured", "isSpecialOffer", "originalPrice", "price", "rating", "seats", "slug", "start_date", "title" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
