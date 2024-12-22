/*
  Warnings:

  - You are about to drop the column `managerId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Location` DROP FOREIGN KEY `Location_managerId_fkey`;

-- DropForeignKey
ALTER TABLE `Location` DROP FOREIGN KEY `Location_userId_fkey`;

-- AlterTable
ALTER TABLE `Location` DROP COLUMN `managerId`,
    DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentSchedule` ADD CONSTRAINT `PaymentSchedule_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Key` ADD CONSTRAINT `Key_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PriceAdjustment` ADD CONSTRAINT `PriceAdjustment_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
