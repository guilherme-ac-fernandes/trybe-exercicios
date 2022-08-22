module.exports = (err, _req, res, _next) => {
  // console.log('erro:', err);

  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Something went wrong' });
};