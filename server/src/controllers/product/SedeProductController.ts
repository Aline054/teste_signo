import {Request, Response} from 'express';

import { SendProductService } from '../../services/product/SedeProductServices'

class SendProductController{
    async handle( req: Request, res: Response){
        const{ order_id } =req.body;

        const sendProductService = new SendProductService();

        const order = await sendProductService.execute({
            order_id
        });

        return res.json(order);
    }

}

export { SendProductController };