/*
  Warnings:

  - The values [Recieved] on the enum `AdmissionStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AdmissionStatus_new" AS ENUM ('Received', 'InProgress', 'Admitted');
ALTER TABLE "student" ALTER COLUMN "admission_status" DROP DEFAULT;
ALTER TABLE "student" ALTER COLUMN "admission_status" TYPE "AdmissionStatus_new" USING ("admission_status"::text::"AdmissionStatus_new");
ALTER TYPE "AdmissionStatus" RENAME TO "AdmissionStatus_old";
ALTER TYPE "AdmissionStatus_new" RENAME TO "AdmissionStatus";
DROP TYPE "AdmissionStatus_old";
ALTER TABLE "student" ALTER COLUMN "admission_status" SET DEFAULT 'Received';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('male', 'female');
ALTER TABLE "admin" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TABLE "staff" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TABLE "student" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "admission_status" SET DEFAULT E'Received';
