const models = require('../database/models');

const userService = {

  async getAllByRole() {
    const userName = await models.User.findAll({ 
      where: { role: 'seller' }, 
      attributes: { exclude: ['password', 'email', 'role'] },
       });

    return userName;
  },

  async getByName(name) {
    const id = await models.User.findOne({
      where: { name }, 
      raw: true, 
      attributes: { exclude: ['password', 'email', 'role', 'name'] },
    });
    return id;
  },
};

module.exports = userService;
