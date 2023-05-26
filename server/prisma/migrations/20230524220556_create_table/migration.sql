-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" DECIMAL(65,30) NOT NULL,
    "create_ate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_it" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "estoque" INTEGER NOT NULL,
    "create_ate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_it" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);
