/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `isEdited` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isEdited` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Location` DROP COLUMN `isDeleted`,
    DROP COLUMN `isEdited`,
    DROP COLUMN `isNew`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `isDeleted`,
    DROP COLUMN `isEdited`,
    DROP COLUMN `isNew`;
