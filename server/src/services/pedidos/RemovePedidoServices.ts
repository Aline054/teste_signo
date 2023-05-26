import prismaClient from "../../prisma";

interface PedidoRequest{
  order_id: string;
};
class  RemovePedidoService{
  async execute({order_id} : PedidoRequest){

      const PedidoRemove = await prismaClient.pedidos.delete({
          where:{
              id: order_id
          }
      })
      return PedidoRemove;
  }
}
export { RemovePedidoService }