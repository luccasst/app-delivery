const authenticationService = require('../services/authenticationService');
const productService = require('../services/productService');

const productController = {
    async getAll(req, res) {
        const token = req.headers.authorization;
        await authenticationService.verifyToken(token);
        await authenticationService.validateToken(token);
        const allProducts = await productService.getAll();
        return res.status(200).json(allProducts);
    },
};

module.exports = productController;