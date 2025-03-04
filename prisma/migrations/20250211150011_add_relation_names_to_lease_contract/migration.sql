/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `renterId` to the `LeaseContract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LeaseContract` ADD COLUMN `renterId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `dni` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_dni_key` ON `User`(`dni`);

-- AddForeignKey
ALTER TABLE `LeaseContract` ADD CONSTRAINT `LeaseContract_renterId_fkey` FOREIGN KEY (`renterId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
