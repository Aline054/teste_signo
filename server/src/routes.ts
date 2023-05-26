import {Router} from 'express';
import { CreateUserController } from './controllers/users/CreateUserController';
import { AuthUserController } from './controllers/users/AuthUserController';

import {CreateClientsController} from './controllers/clients/CreateClientsController'
import { DetailOperadorController } from './controllers/clients/DetailClientsController';
import { RemoveClientsController } from './controllers/clients/RemoveClientsController';
import { SedeClientsController } from './controllers/clients/SedeClientsController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from './controllers/product/ListProductController';
import { RemoveProductController } from './controllers/product/RemoverProductController';
import { SendProductController } from './controllers/product/SedeProductController';
import { CreatePedidoController } from './controllers/pedidos/CreatePedidosControler';
import { ListPedidoController } from './controllers/pedidos/ListPedidosController';
import { RemovePedidoController } from './controllers/pedidos/RemovePedidoController';
import { SendPedidoController } from './controllers/pedidos/SedePedidosController';

const router = Router();
//users
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

//client
router.post('/client', new CreateClientsController().handle);
router.get('/client', new DetailOperadorController().handle)
router.delete('/client', new RemoveClientsController().handle)
router.put('/client', new SedeClientsController().handle)

//produto
router.post('/product', new CreateProductController().handle);
router.get('/product', new ListProductController().handle)
router.delete('/product', new RemoveProductController().handle)
router.put('/product', new SendProductController().handle)

//pedidos
router.post('/pedido', new CreatePedidoController().handle)
router.get('/pedido', new ListPedidoController().handle)
router.delete('/pedido', new RemovePedidoController().handle)
router.put('/pedido', new SendPedidoController ().handle)


export { router };