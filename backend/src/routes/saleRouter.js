const { Router } = require('express');
const saleController = require('../controllers/saleController');

const saleRouter = Router();

saleRouter.post('/', saleController.add);

module.exports = saleRouter;