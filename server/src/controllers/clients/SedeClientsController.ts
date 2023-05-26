import {Request, Response} from 'express'

import {  SedeClientService  } from '../../services/clients/SedeClientsService'

class SedeClientsController{
  async handle(req: Request, res: Response){
    const { order_id } = req.body;
    const  sedeClientService = new  SedeClientService ();
    const sede = await sedeClientService.execute({
      order_id
    });

    return res.json(sede);

  }
}

export { SedeClientsController }