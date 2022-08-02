module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if(!(email.match(/^[ae-z0-9.]+@[a-z0-9]+\.[a-z]+/i))) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  if(password.length < 4 || password.length > 8 || !password.match(/^[0-9]*$/)) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }
  
  next();
};