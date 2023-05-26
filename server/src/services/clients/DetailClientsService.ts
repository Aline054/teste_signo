import prismaClient from "../../prisma";

interface  OperadorRequest{
    name: string;
    email: string;
    cpf: string;
}
class DetailClientsService{
    async execute({name,email,cpf}: OperadorRequest){

    const clienteDetail = await prismaClient.client.findFirst({
        where:{
            name: name,
            email:email,
            cpf:cpf
        },
    })
    return clienteDetail;
}

}

export{ DetailClientsService }