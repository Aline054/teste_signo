import prismaClient from "../../prisma"

interface ProductRequest{
  sku: string;
  titulo: string;
  estoque: number;
  preco: number;
}
class CreateProductService{
  async execute({ sku, titulo, estoque, preco}: ProductRequest){

    const product = await prismaClient.produto.create({
      data:{
          sku: sku,
          titulo: titulo,
          estoque:estoque,
          preco:preco,
      }
    })
    return product;
  }
}
export { CreateProductService };

