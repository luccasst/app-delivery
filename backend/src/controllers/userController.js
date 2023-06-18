const userService = require('../services/userService');

const userController = {
    async getAllByRole(_req, res) {
        const user = await userService.getAllByRole();
        return res.status(200).json(user);
    },
};

module.exports = userController;