const { Router } = require('express');
const saleController = require('../controllers/saleController');

const saleRouter = Router();

saleRouter.get('/:id', saleController.getById);
saleRouter.get('/', saleController.getAll);
saleRouter.post('/', saleController.add);

module.exports = saleRouter;