const models = require('../database/models');

const userService = {

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
