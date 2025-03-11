-- AlterTable
ALTER TABLE `User` ADD COLUMN `notifyBillingSummary` VARCHAR(191) NOT NULL DEFAULT 'none',
    ADD COLUMN `notifyContractEnded` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `notifyContractExpiring` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `notifyPaymentReminder` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `notifyPriceIncrease` BOOLEAN NOT NULL DEFAULT false;
