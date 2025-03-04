/*
  Warnings:

  - Made the column `dni` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `dni` INTEGER NOT NULL;
