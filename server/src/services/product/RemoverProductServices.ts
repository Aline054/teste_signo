import prismaClient from "../../prisma";

interface ProductRequest{
  order_id: string;
};
class  RemoveProductService{
  async execute({order_id} : ProductRequest){

      const ProductRemove = await prismaClient.produto.delete({
          where:{
              id: order_id
          }
      })
      return ProductRemove;
  }
}
export { RemoveProductService }