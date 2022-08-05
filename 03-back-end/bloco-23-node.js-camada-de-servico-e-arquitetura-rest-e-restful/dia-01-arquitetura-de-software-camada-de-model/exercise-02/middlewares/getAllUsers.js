const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = rescue(async (_req, res) => {
  const users = await UserModel.getAll();
  if (users.length === 0) return res.status(200).json([]);
  res.status(200).json(users);
});
