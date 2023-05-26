import prismaClient from "../../prisma";

interface ProductRequest{
  id: string;
  sku: string;
  titulo: string;
  estoque: number;
  preco: number;
}

class ListProductService{
  async execute({ id, sku,titulo,estoque,preco }: ProductRequest){
    
    const findByCategory = await prismaClient.produto.findMany({
      where:{
        id: id,
        sku: sku,
        titulo:titulo,
        estoque:estoque,
        preco:preco

      }
    })

    return findByCategory;

  }
}

export { ListProductService };