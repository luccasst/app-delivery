const authenticationService = require('../services/authenticationService');
const loginService = require('../services/loginService');

const loginController = {
    async login(req, res) {
        const obj = req.body;
        await loginService.validateBody(obj);
        const user = await loginService.login(obj);
        const token = await authenticationService.tokenGenerate(user);
        return res.status(200).json({ ...user, token });
    },
};

module.exports = loginController;