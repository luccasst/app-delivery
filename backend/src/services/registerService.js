const Joi = require('joi');
const md5 = require('md5');
const ErrorHttp = require('../error/error');
const models = require('../database/models');
const { runSchema } = require('./util');

const registerService = {
  
    validateBody: runSchema(Joi.object({
      name: Joi.string().required().min(12),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    })),

  async userRegister(payload) {
    const { password, email, name } = payload;
    const hash = md5(password);
    
    const user = await models.User.findOne({ where: { email }, raw: true });
    if (user) throw new ErrorHttp('User already registered', 409);
    
    await models.User.create({ name, email, password: hash, role:"customer" });
    const newUser = await models.User.findOne({ where: { email }, raw: true });
    console.log(newUser); 

    return newUser;
  },
};

module.exports = registerService;
