import {Request, Response } from 'express'
import { CreatePedidosService } from '../../services/pedidos/CreatePedidoServices'

class CreatePedidoController{
  async handle(req: Request, res: Response){
    const { codigo,  data, estoque, preco } = req.body;
    const createPedidosService = new CreatePedidosService();

      const product = await createPedidosService.execute({
        codigo,
        data,
        preco,
        estoque,
      });
      return res.json(product)
    }
  }
export { CreatePedidoController }
