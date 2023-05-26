import { Request,Response } from "express";
import { DetailClientsService } from "../../services/clients/DetailClientsService";


class DetailOperadorController{
    async handle(req: Request, res:Response){
        const{ name,email,cpf } = req.body;
        const detailClientsService = new DetailClientsService();

        const opere = await detailClientsService.execute({
            name,
            email,
            cpf
            
        });
        
        return res.json(opere)
    }
}

export {DetailOperadorController}