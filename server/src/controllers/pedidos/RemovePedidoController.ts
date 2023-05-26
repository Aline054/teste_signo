import { Request,Response } from "express";
import { RemovePedidoService } from '../../services/pedidos/RemovePedidoServices'

class RemovePedidoController{

    async handle(req:Request,res:Response){
        const order_id  = req.query.order_id as string;
        const  removePedidoService = new RemovePedidoService();
        const remove = await removePedidoService.execute({
          order_id
               
        });

        return res.json(remove);
    }
}

export { RemovePedidoController };