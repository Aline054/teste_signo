import prismaClient from "../../prisma"

interface PedidoRequest{
  codigo: number;
  data: string;
  preco : number;
  estoque : number;
}
class CreatePedidosService{
  async execute({ codigo, data, preco, estoque}: PedidoRequest){

    const pedidos = await prismaClient.pedidos.create({
      data:{
        codigo: codigo,
        data: data,
        preco: preco,
        estoque: estoque
      }
    })
    return pedidos;
  }
}
export { CreatePedidosService };

