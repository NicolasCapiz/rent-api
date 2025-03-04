/*
  Warnings:

  - You are about to drop the column `amountPaid` on the `PaymentRecord` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PaymentRecord` table. All the data in the column will be lost.
  - You are about to drop the column `paymentId` on the `PaymentRecord` table. All the data in the column will be lost.
  - Added the required column `month` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentRecordId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalRent` to the `PaymentRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `PaymentRecord` DROP FOREIGN KEY `PaymentRecord_paymentId_fkey`;

-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `month` INTEGER NOT NULL,
    ADD COLUMN `paymentRecordId` INTEGER NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PaymentRecord` DROP COLUMN `amountPaid`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `paymentId`,
    ADD COLUMN `remainingAmount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `totalPaid` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `totalRent` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_paymentRecordId_fkey` FOREIGN KEY (`paymentRecordId`) REFERENCES `PaymentRecord`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
