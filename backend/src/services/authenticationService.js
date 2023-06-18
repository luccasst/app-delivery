require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const path = require('path');
const { readFileSync } = require('fs');
const ErrorHttp = require('../error/error');

const secret = readFileSync(path.join(__dirname, '../..', 'jwt.evaluation.key'), 'utf-8');

  const authenticationService = {
  async tokenGenerate(data) {
    const payload = { data };

    const token = jwt.sign(payload, secret, {
        algorithm: 'HS256',
        expiresIn: '7D',
    });
    return token;
  },

  async validateToken(authorization) {
    const schema = Joi.string().required().messages({
      'any.required': 'Token not found',
    });
  const result = await schema.validateAsync(authorization);
    return result;
  },

  async verifyToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
      throw new ErrorHttp('Expired or invalid token', 401);
    }
  },
};

module.exports = authenticationService;