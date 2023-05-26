import {Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController{
  async handle(req: Request, res: Response){
    const { sku, titulo, estoque, preco } = req.body;
    const createProductService = new CreateProductService();

      const product = await createProductService.execute({
        sku,
        titulo,
        estoque,
        preco
      });
      return res.json(product)
    }
  }
export { CreateProductController }
