/*
  Warnings:

  - You are about to drop the column `price` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Contract` DROP FOREIGN KEY `Contract_CUST_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Contract` DROP FOREIGN KEY `Contract_locationId_fkey`;

-- AlterTable
ALTER TABLE `Key` MODIFY `returnDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Location` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `Payment` MODIFY `amount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PriceAdjustment` MODIFY `amount` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Contract`;

-- CreateTable
CREATE TABLE `RentHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locationId` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `rentAmount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RentHistory_locationId_month_year_key`(`locationId`, `month`, `year`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentRecord` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locationId` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `amountPaid` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CUST_ID` INTEGER NULL,
    `paymentId` INTEGER NULL,

    INDEX `PaymentRecord_locationId_fkey`(`locationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeaseContract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locationId` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `rentAmount` INTEGER NOT NULL,
    `renewed` BOOLEAN NOT NULL DEFAULT false,
    `cancelled` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CUST_ID` INTEGER NULL,

    INDEX `LeaseContract_locationId_fkey`(`locationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RentHistory` ADD CONSTRAINT `RentHistory_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentRecord` ADD CONSTRAINT `PaymentRecord_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentRecord` ADD CONSTRAINT `PaymentRecord_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentRecord` ADD CONSTRAINT `PaymentRecord_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaseContract` ADD CONSTRAINT `LeaseContract_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaseContract` ADD CONSTRAINT `LeaseContract_CUST_ID_fkey` FOREIGN KEY (`CUST_ID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
