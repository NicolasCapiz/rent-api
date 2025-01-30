/*
  Warnings:

  - You are about to drop the column `executionDate` on the `PriceAdjustment` table. All the data in the column will be lost.
  - You are about to drop the column `percentage` on the `PriceAdjustment` table. All the data in the column will be lost.
  - Added the required column `applyToAll` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.
  - Made the column `amount` on table `PriceAdjustment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `PriceAdjustment` DROP COLUMN `executionDate`,
    DROP COLUMN `percentage`,
    ADD COLUMN `applyToAll` BOOLEAN NOT NULL,
    ADD COLUMN `type` INTEGER NOT NULL,
    MODIFY `amount` INTEGER NOT NULL;
