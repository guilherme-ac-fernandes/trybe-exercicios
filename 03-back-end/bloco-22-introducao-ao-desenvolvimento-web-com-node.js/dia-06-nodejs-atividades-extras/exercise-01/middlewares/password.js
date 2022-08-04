// Aplicação do regex para avaliar apenas números proveniente do StackOverflow
//source: https://stackoverflow.com/questions/19715303/regex-that-accepts-only-numbers-0-9-and-no-characters
module.exports = (req, res, next) => {
  const { password } = req.body;
  
  if(password.length < 4
    || password.length > 8
    || !password.match(/^[0-9]*$/)) {
    return res.status(400).json({
      message: "invalid data",
    });
  }
  
  next();
};