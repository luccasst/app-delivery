const saleProductService = require('../services/saleProductsService');

const saleProductController = {
  async getAllByID(req, res) {
    const { id } = req.params;
    const products = await saleProductService.getAllByID(id);
    return res.status(200).json(products);
  },

  async updateStatus(req, res) {
    const { id } = req.params;
    const { newStatus } = req.body;
    await saleProductService.updateStatus(id, newStatus);
    return res.status(200).json({ message: 'Criado com Sucesso!' });
  },
}

module.exports = saleProductController;