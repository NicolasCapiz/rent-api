/*
  Warnings:

  - You are about to drop the column `date` on the `PriceAdjustment` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `PriceAdjustment` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `PriceAdjustment` table. All the data in the column will be lost.
  - Added the required column `executionDate` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PriceAdjustment` DROP COLUMN `date`,
    DROP COLUMN `price`,
    DROP COLUMN `type`,
    ADD COLUMN `amount` DOUBLE NULL,
    ADD COLUMN `executionDate` DATETIME(3) NOT NULL,
    ADD COLUMN `percentage` DOUBLE NULL,
    ADD COLUMN `period` INTEGER NOT NULL,
    ADD COLUMN `status` INTEGER NOT NULL;
