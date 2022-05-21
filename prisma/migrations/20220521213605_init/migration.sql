/*
  Warnings:

  - You are about to drop the column `dateOfBirth` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `profilePic` on the `student` table. All the data in the column will be lost.
  - Added the required column `date_of_birth` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_pic` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AdmissionStatus" AS ENUM ('Recieved', 'InProgress', 'Admitted');

-- AlterTable
ALTER TABLE "student" DROP COLUMN "dateOfBirth",
DROP COLUMN "profilePic",
ADD COLUMN     "admission_status" "AdmissionStatus" NOT NULL DEFAULT E'Recieved',
ADD COLUMN     "date_of_birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "profile_pic" TEXT NOT NULL;
