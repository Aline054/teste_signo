import { Request,Response } from "express";
import { ListProductService } from "../..//services/product/ListProductService"


class ListProductController{
    async handle(req: Request, res:Response){
        const{ id,sku,titulo, estoque,preco } = req.body;
        const listProductService = new ListProductService();

        const list = await listProductService.execute({
           id,
           sku,
           titulo,
           estoque,
           preco,
        });
        
        return res.json(list)
    }
}

export { ListProductController }