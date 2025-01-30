/*
  Warnings:

  - You are about to drop the `_PriceAdjustmentsOnLocations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PriceAdjustmentsOnLocations` DROP FOREIGN KEY `_PriceAdjustmentsOnLocations_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PriceAdjustmentsOnLocations` DROP FOREIGN KEY `_PriceAdjustmentsOnLocations_B_fkey`;

-- AlterTable
ALTER TABLE `Location` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `price` INTEGER NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- DropTable
DROP TABLE `_PriceAdjustmentsOnLocations`;

-- CreateTable
CREATE TABLE `AdjustmentLocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `priceAdjustmentId` INTEGER NOT NULL,
    `locationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AdjustmentLocations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AdjustmentLocations_AB_unique`(`A`, `B`),
    INDEX `_AdjustmentLocations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AdjustmentLocation` ADD CONSTRAINT `AdjustmentLocation_priceAdjustmentId_fkey` FOREIGN KEY (`priceAdjustmentId`) REFERENCES `PriceAdjustment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AdjustmentLocation` ADD CONSTRAINT `AdjustmentLocation_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AdjustmentLocations` ADD CONSTRAINT `_AdjustmentLocations_A_fkey` FOREIGN KEY (`A`) REFERENCES `Location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AdjustmentLocations` ADD CONSTRAINT `_AdjustmentLocations_B_fkey` FOREIGN KEY (`B`) REFERENCES `PriceAdjustment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
