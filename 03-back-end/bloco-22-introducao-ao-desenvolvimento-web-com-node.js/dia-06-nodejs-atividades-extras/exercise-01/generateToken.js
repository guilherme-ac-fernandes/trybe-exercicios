const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

module.exports = generateToken;
