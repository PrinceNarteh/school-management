/*
  Warnings:

  - Added the required column `email` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" ADD COLUMN     "email" TEXT NOT NULL;
