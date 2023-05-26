import prismaClient from "../../prisma";

interface SedeRequest{
  order_id: string;
}

class  SedeClientService {
  async execute({ order_id }: SedeRequest){
    
    const clientSede = await prismaClient.client.update({
      where: {
        id: order_id
      },
      data:{
        draft: false
      }
    })
    return clientSede;
  }
}
export { SedeClientService }