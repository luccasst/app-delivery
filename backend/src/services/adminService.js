const md5 = require('md5');
const { Op } = require('sequelize');
const models = require('../database/models');
const ErrorHttp = require('../error/error');

const adminService = {
  async createUser(payload) {
    const { password, email, name, role } = payload;
    const hash = md5(password);
    
    const user = await models.User.findOne({ where: { email }, raw: true });
    if (user) throw new ErrorHttp('User already registered', 409);

    const newUser = await models.User.create({ name, email, password: hash, role });
    return newUser;
  },

  async findAll() {
    const users = await models.User.findAll({
      where: { role: { [Op.not]: 'administrator' } },
      attributes: { exclude: ['password', 'id'] },
    });
  return users;
  },

  async remove({ email }) {
    await models.User.destroy({ where: { email } });
  },
}

module.exports = adminService;