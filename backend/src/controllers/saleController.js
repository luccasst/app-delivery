const authenticationService = require('../services/authenticationService');
const saleService = require('../services/saleService');
const userService = require('../services/userService');

const saleController = {
    async add(req, res) {
        const token = req.headers.authorization;
        await authenticationService.verifyToken(token);
        await authenticationService.validateToken(token);
        const { id } = await userService.getByName(req.body.sellerName);
        const data = await saleService.add(req.body, id);
        return res.status(201).json(data);
    },

    async getById(req, res) {
        const item = await saleService.getById(req.params.id);
        return res.status(200).json(item);
    },

    async getAll(req, res) {
        const allSales = await saleService.getAll(req.headers.id);
        return res.status(200).json(allSales);
    },
}

module.exports = saleController;