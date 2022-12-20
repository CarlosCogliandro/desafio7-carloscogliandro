import express from "express";
import routerProducts from './routes/routerProducts.js';
import routerCarts from './routes/routerCart.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routerProducts);
app.use('/api/cart', routerCarts);
app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -3, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});

const connectedServer = app.listen(PORT, ()=> console.log(`Server ON By Carlos Cogliandro------> http://localhost:${PORT}`));
connectedServer.on('Error al conectar ----->', (error) => {console.log(error)});