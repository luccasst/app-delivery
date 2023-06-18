const saleProductService = require('../services/saleProductsService');

const saleProductController = {
  async getAllByID(req, res) {
    const { id } = req.params;
    const products = await saleProductService.getAllByID(id);
    return res.status(200).json(products);
  },
}

module.exports = saleProductController;