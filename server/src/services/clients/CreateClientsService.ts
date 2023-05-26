import prismaClient from '../../prisma'

interface UserRequest{
  name: string;
  email: string;
  cpf: string

}

class CreateClientsServices{
  async execute({name, email,cpf}: UserRequest){

    const clents = await prismaClient.client.create({
      data:{
        name: name,
        email:email,
        cpf: cpf
      },
    })
    return clents;
  }
}
export { CreateClientsServices }