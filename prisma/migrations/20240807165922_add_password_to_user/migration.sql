/*
  Warnings:

  - You are about to drop the column `managerId` on the `Location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Location` DROP FOREIGN KEY `Location_managerId_fkey`;

-- AlterTable
ALTER TABLE `Contract` ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `Invoice` ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `Key` ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `Location` DROP COLUMN `managerId`,
    ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `PaymentSchedule` ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `PriceAdjustment` ADD COLUMN `CUST_ID` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;
