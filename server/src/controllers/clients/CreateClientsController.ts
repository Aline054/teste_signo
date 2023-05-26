import { Request,Response } from "express";

import { CreateClientsServices } from "../../services/clients/CreateClientsService"


class CreateClientsController{
  async handle(req:Request, res: Response){
    const{ name, email,cpf } = req.body;

    const createClientsServices = new CreateClientsServices

    const clients = await createClientsServices.execute({
      name,
      email,
      cpf,
    });

    return res.json(clients);
  }
}

export {CreateClientsController}