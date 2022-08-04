const express = require('express');
const usernameMiddleware = require('./middlewares/username');
const emailMiddleware = require('./middlewares/email');
const passwordMiddleware = require('./middlewares/password');
const emailAndPasswordMiddleware = require('./middlewares/emailAndPassword');
const generateToken = require('./generateToken');

const router = express.Router();

router.post('/register', [
  usernameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  (_req, res) => res.status(201).json({ message: "user created" }),
]);

router.post('/login', [
  emailAndPasswordMiddleware,
  (_req, res) => res.status(200).json({ token: generateToken() }),
]);

module.exports = router;
