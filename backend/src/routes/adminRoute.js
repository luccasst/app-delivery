const { Router } = require('express');
const adminController = require('../controllers/adminController');

const adminRoute = Router();

adminRoute.post('/', adminController.createUser);
adminRoute.get('/', adminController.findAll);
adminRoute.delete('/', adminController.remove);


module.exports = adminRoute;