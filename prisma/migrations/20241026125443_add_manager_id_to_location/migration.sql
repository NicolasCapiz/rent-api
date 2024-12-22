/*
  Warnings:

  - Added the required column `managerId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Location` ADD COLUMN `managerId` INTEGER NOT NULL default 1,
    ADD COLUMN `userId` INTEGER NULL;

-- CreateIndex
CREATE INDEX `Location_managerId_fkey` ON `Location`(`managerId`);

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
