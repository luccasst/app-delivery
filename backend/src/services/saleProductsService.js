const models = require('../database/models');

const saleProductService = {
  async getAllByID(id) {
    const customerCorder = await models.Sale.findOne({
      where: { id },
      attributes: ['totalPrice', 'status', 'saleDate', 'id'],
      include: [{
        model: models.User,
        as: 'seller',
        attributes: ['name'] },
      { model: models.SalesProduct,
        as: 'products',
        attributes: ['quantity'],
        include: [{
          model: models.Product,
          attributes: ['name', 'price'],
          as: 'products',
        }] },
      ],
    });
    return customerCorder;
  },

  async updateStatus(id, newStatus) {
    await models.Sale.update({
      status: newStatus,
    },
      { where: { id } });
  },
}

module.exports = saleProductService;