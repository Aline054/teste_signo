import prismaClient from "../../prisma";

interface ClientRequest{
    order_id: string;
};
class RemoveClientsService{
    async execute({order_id} : ClientRequest){

        const clientsRemove = await prismaClient.client.delete({
            where:{
                id: order_id
            }
        })
        return clientsRemove;
    }
}
export { RemoveClientsService }