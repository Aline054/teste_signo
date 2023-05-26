import { Request,Response } from "express";
import { RemoveProductService } from '../../services/product/RemoverProductServices'

class RemoveProductController{

    async handle(req:Request,res:Response){
        const order_id  = req.query.order_id as string;
        const  removeProductService = new RemoveProductService();
        const remove = await removeProductService.execute({
          order_id
               
        });

        return res.json(remove);
    }
}

export { RemoveProductController };