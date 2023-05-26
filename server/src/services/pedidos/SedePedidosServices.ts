import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class SendPedidosService{
    async execute({ order_id }: OrderRequest){
        const order = await prismaClient.pedidos.update({
            where:{
                id: order_id
            },
            data:{
                draft: false
            }
        })

        return order;
    }

}

export { SendPedidosService }