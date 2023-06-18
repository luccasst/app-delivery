const models = require('../database/models');

const productService = {
  async getAll() {
    const allProducts = await models.Product.findAll({ raw: true });
    return allProducts;
  },
};

module.exports = productService;