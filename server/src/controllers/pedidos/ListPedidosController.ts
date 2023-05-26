import { Request,Response } from "express";
import { ListPedidosService } from "../../services/pedidos/ListPedidosService"


class ListPedidoController{
    async handle(req: Request, res:Response){
        const{ codigo,data, estoque,preco } = req.body;
        const listPedidoService = new ListPedidosService();

        const list = await listPedidoService.execute({
         codigo,
         data,
         preco,
         estoque,
        });
        
        return res.json(list)
    }
}

export { ListPedidoController }