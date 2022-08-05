const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  if (!user || user.length === 0) {
    return res.status(404).json({message: "User not Found" });
  }
  return res.status(200).json(user);
});
