const { Router } = require('express');
const saleProductController = require('../controllers/saleProductsController');

const saleProductRouter = Router();

saleProductRouter.get('/:id', saleProductController.getAllByID);
saleProductRouter.put('/:id', saleProductController.updateStatus);

module.exports = saleProductRouter;