/*
  Warnings:

  - You are about to drop the column `renewed` on the `LeaseContract` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `LeaseContract` DROP COLUMN `renewed`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false;
