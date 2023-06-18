const authenticationService = require('../services/authenticationService');
const registerService = require('../services/registerService');

const registerController = {
    async userRegister(req, res) {
        const obj = req.body;
        const newUser = await registerService.validateBody(obj);
        const user = await registerService.userRegister(newUser);  
        const token = await authenticationService.tokenGenerate(user);
        return res.status(201).json({ ...user, token });
    },
};

module.exports = registerController;