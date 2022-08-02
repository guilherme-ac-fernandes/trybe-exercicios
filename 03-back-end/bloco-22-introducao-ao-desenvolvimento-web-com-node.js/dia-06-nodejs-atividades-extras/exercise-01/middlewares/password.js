module.exports = (req, res, next) => {
  const { password } = req.body;
  
  if(password.length < 4 || password.length > 8 || !password.match(/^[0-9]*$/)) {
    return res.status(400).json({ message: "invalid data" });
  }
  
  next();
};