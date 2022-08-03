module.exports = (req, res, next) => {
  const { email } = req.body;
  if(!(email.match(/^[ae-z0-9.]+@[a-z0-9]+\.[a-z]+/i))) {
    return res.status(400).json({
      message: "invalid data",
    });
  }
  next();
};