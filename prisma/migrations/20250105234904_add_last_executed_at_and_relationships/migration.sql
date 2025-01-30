/*
  Warnings:

  - You are about to alter the column `amount` on the `PriceAdjustment` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `updatedAt` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PriceAdjustment` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `lastExecutedAt` DATETIME(3) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `amount` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `_PriceAdjustmentsOnLocations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PriceAdjustmentsOnLocations_AB_unique`(`A`, `B`),
    INDEX `_PriceAdjustmentsOnLocations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PriceAdjustmentsOnLocations` ADD CONSTRAINT `_PriceAdjustmentsOnLocations_A_fkey` FOREIGN KEY (`A`) REFERENCES `Location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PriceAdjustmentsOnLocations` ADD CONSTRAINT `_PriceAdjustmentsOnLocations_B_fkey` FOREIGN KEY (`B`) REFERENCES `PriceAdjustment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
