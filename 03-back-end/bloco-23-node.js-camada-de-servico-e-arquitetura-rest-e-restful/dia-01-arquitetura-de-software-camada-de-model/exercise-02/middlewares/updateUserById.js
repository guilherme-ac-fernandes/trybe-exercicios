const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
  (req, _res, next) => {
    const { error } = UserModel.isValid(req.body);
    if (error) return next(error);
    next();
  },
  rescue(async (req, res) => {
    const { id } = req.params;
    // const { firstName, lastName, email, password } = req.body;
    const updatedUser = await UserModel.updateById(id, { ...req.body });
    if (!updatedUser) {
    return res.status(404).json({ message: 'User not Found' });
    }
    return res.status(200).json(updatedUser);
  }),
];
