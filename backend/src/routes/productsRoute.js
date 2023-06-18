const { Router } = require('express');
const productController = require('../controllers/productController');

const productsRouter = Router();

productsRouter.get('/', productController.getAll);

module.exports = productsRouter;