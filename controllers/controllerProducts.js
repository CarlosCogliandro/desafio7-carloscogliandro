import Container from '../controllers/container.js';

const products = new Container('./data/products.json');

const getProducts = (req, res) => {
	if (req.params.id == undefined) return res.send(products.getAll());
	const id = Number(req.params.id);
	const product = products.getById(id);
	if (!product) return res.status(404).send({ message: 'El ID no pertenece a un producto' });
	res.json(product);
}

const addProduct = (req, res) => {
	const { name, description, code, photo, price, stock } = req.body;
	products.save({ name, description, code, photo, price, stock });
	res.json({ message: 'Producto agregado' });
}

const updateProduct = (req, res) => {
	const id = Number(req.params.id);
	if (id < 0 || id > products.objects.length) return res.status(400).send({ message: 'Ingresa el ID de un producto' });
	if (isNaN(id)) return res.status(400).send({ message: 'Ingresa el ID de un producto' });
	products.update(id, req.body);
	res.json({ message: 'Producto actualizado' });
}

const deleteProduct = (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).send({ message: 'Ingresa el ID de un producto' });
	const productDeleted = products.deleteById(id);
	if (productDeleted === -1) return res.status(404).json({ message: 'El ID no pertenece a un producto' });
	res.json({ message: 'Producto eliminado' });
};

export { products, getProducts, addProduct, updateProduct, deleteProduct };