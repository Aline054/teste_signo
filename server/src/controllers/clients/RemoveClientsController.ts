import { Request,Response } from "express";
import { RemoveClientsService } from '../../services/clients/RemoveClientsService'

class RemoveClientsController{

    async handle(req:Request,res:Response){
        const  order_id = req.query.order_id as string;
        const  removeClientsService = new RemoveClientsService();
        const remove = await removeClientsService.execute({
                order_id
               
        });

        return res.json(remove);
    }
}

export { RemoveClientsController };