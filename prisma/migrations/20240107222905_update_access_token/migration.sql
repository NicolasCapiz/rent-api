/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `password`,
    MODIFY `accessToken` VARCHAR(255) NOT NULL,
    MODIFY `firstName` VARCHAR(191) NULL,
    MODIFY `lastName` VARCHAR(191) NULL,
    MODIFY `picture` VARCHAR(191) NULL;
