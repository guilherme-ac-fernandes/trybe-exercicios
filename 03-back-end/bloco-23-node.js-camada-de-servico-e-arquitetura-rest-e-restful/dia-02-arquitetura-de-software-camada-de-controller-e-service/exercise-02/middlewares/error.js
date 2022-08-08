const errorsCode = {
  "invalidData": 400,
  "notFound": 404,
  "alreadyExists": 409,
};

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  if (err.code) {
    return res.status(errorsCode[err.code]).json({ message: err.message });
  }

  return res.status(500).json({
    error: { code: 'internal', message: 'Internal server error' },
  });
};