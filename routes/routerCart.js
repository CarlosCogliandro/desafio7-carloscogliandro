import express from "express";
import { addCart, deleteCart, getProducts, addProductToCart, deleteProduct } from "../controllers/controllerCart.js";
const routerCarts = express.Router();

routerCarts.post('/', (req, res) => addCart(req, res));

routerCarts.delete('/:id', (req, res) => deleteCart(req, res));

routerCarts.get('/:id/products', (req, res) => getProducts(req, res));

routerCarts.post('/:id/products', (req, res) => addProductToCart(req, res));

routerCarts.delete('/:id/products/:id_prod', (req, res) => deleteProduct(req, res));

export default routerCarts;