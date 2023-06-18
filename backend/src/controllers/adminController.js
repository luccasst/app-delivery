const authenticationService = require('../services/authenticationService');
const adminService = require('../services/adminService');

const adminController = {
  async createUser(req, res) {
    const token = req.headers.authorization;
    const user = req.body;
    await authenticationService.verifyToken(token);
    await authenticationService.validateToken(token);
    const newUser = await adminService.createUser(user);
    console.log(newUser);
    return res.status(201).json(newUser, { message: 'Usuário criado com sucesso' });
  },

  async findAll(_req, res) {
    const users = await adminService.findAll();
    return res.status(200).json(users);
  },

  async remove(req, res) {
    console.log(req.body);
    await adminService.remove(req.body);
    res.status(200).json({ message: 'Usuário removido com sucesso' });
  },
}

module.exports = adminController;