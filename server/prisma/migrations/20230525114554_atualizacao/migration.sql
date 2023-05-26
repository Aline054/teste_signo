-- AlterTable
ALTER TABLE "client" ADD COLUMN     "draft" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "draft" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "produto" ADD COLUMN     "draft" BOOLEAN NOT NULL DEFAULT true;
