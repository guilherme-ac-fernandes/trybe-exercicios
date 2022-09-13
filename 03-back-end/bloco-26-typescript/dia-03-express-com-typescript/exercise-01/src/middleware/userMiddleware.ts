// Resolução do middleware de validação proveniente do course da Trybe presente no repositório
// source: https://github.com/tryber/praticando-typescript-express/blob/main/atividade-1/src/middlewares/userMiddleware.ts

import { NextFunction, Request, Response } from 'express';

import IUser from '../interface/IUser';

function validateData(name: string, password: string, email: string) {
  if (password.length < 6 || password.length > 12) {
    const message = 'The field "password" must have between 6 and 12 characters';
    return ({ status: 400, message });
  }

  if (name.length < 3) {
    const message = 'The field "name" must have at least 3 characters';
    return ({ status: 400, message });
  }

  const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

  if (!regexEmail.test(email)) {
    const message = 'The field "email" must have a valid email format';
    return ({ status: 400, message });
  }

  return null;
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, email, password } = req.body as IUser;

  if (!name || !email || !password) {
    const message = 'The fields "name", "email" and "password" are required';
    return res.status(400).json({ message });
  }

  const error = validateData(name, password, email);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}