const { Router } = require('express');
const adminController = require('../controllers/adminController');

const adminRoute = Router();

adminRoute.post('/', adminController.createUser);

module.exports = adminRoute;