-- DropForeignKey
ALTER TABLE "Coach" DROP CONSTRAINT "Coach_user_id_fkey";

-- AlterTable
ALTER TABLE "Coach" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
