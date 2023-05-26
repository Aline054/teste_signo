import prismaClient from "../../prisma";

interface PedidoRequest{
  codigo: number;
  data: string;
  preco : number;
  estoque : number;
}

class ListPedidosService{
  async execute({ codigo,data,estoque,preco }: PedidoRequest){
    
    const findByCategory = await prismaClient.pedidos.findMany({
      where:{
        codigo:codigo,
        data:data,
        estoque:estoque,
        preco:preco

      }
    })

    return findByCategory;

  }
}

export { ListPedidosService };