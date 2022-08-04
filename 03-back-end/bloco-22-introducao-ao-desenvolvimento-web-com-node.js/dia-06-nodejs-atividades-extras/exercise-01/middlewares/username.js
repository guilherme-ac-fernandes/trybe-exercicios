module.exports = (req, res, next) => {
  const { username } = req.body;
  if(username.length < 4) {
    return res.status(400).json({
      message: "invalid data",
    });
  }
  next();
};