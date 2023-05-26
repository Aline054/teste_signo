import {Request, Response} from 'express';

import { SendPedidosService } from '../../services/pedidos/SedePedidosServices'

class SendPedidoController{
    async handle( req: Request, res: Response){
        const{ order_id } =req.body;

        const sendPedidosService = new SendPedidosService();

        const order = await sendPedidosService.execute({
            order_id
        });

        return res.json(order);
    }

}

export { SendPedidoController };