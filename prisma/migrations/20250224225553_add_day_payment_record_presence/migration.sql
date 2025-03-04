/*
  Warnings:

  - Made the column `day` on table `PaymentRecord` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `PaymentRecord` MODIFY `day` INTEGER NOT NULL;
