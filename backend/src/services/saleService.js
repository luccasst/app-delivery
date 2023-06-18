const Sequelize = require('sequelize');
const config = require('../database/config/config');
const model = require('../database/models');

const sequelize = new Sequelize(config.development);

const saleService = {
  async add(body, sellerId) {
    const result = await sequelize.transaction(async (t) => {   
    const sale = await model.Sale.create({
      userId: body.userId,
      sellerId,
      totalPrice: body.totalPrice,
      deliveryAddress: body.deliveryAddress,
      deliveryNumber: body.deliveryNumber,
      }, { transaction: t, raw: true });
      await Promise.all(body.products.map((each) => model.SalesProduct.create({ 
      saleId: sale.id, productId: each.id, quantity: each.qtd,
      }, { transaction: t, raw: true })));
    return sale;
    });
    return result;
  },

  async getById(id) {
    const allSale = await model.Sale.findOne({ where: { id } });
    return allSale;
  },

  async getAll(id) {
    const allSales = await model.Sale.findAll({ where: { userId: id }, raw: true });
    return allSales;
  },
}
module.exports = saleService;