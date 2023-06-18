const { Router } = require('express');
const registerController = require('../controllers/registerController');

const registerRouter = Router();

registerRouter.post('/', registerController.userRegister);

module.exports = registerRouter;