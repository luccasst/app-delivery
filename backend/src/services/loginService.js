const Joi = require('joi');
const md5 = require('md5');
const ErrorHttp = require('../error/error');
const models = require('../database/models');
const { runSchema } = require('./util');

const loginService = {
  async login(payload) {
      const hash = md5(payload.password);
      const userLogin = await models.User.findOne({ where: { email: payload.email }, raw: true });
      if (!userLogin || hash !== userLogin.password) throw new ErrorHttp('Not found', 404);
      return userLogin;
  },

  validateBody: runSchema(Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  })),
};

module.exports = loginService;
