import userServices from '../services/userServices';
import { Request, Response } from 'express';
import IUser from '../interface/IUser';

const getAll = async (_req: Request, res: Response) => {
  const users = await userServices.getAll();
  return res.status(200).json(users);
}

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userServices.getById(Number(id));
  return res.status(200).json(user);
};

const create = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const response = await userServices.create(user);
  if (typeof response === 'string') {
    const [code, message] = response.split('|');
    return res.status(Number(code)).json(message);
  }
  return res.status(201).json(response);
}

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body as IUser;

  const response = await userServices.update(Number(id), user);
  if (typeof response === 'string') {
    const [code, message] = response.split('|');
    return res.status(Number(code)).json(message);
  }
  return res.status(200).json(response);
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await userServices.remove(Number(id));
  const [code, message] = response.split('|');
  return res.status(Number(code)).json(message);
};

const login = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  
  const response = await userServices.login(user);
  const [code, message] = response.split('|');
  return res.status(Number(code)).json(message);
}; 

export default { getAll, getById, create, update, remove, login };
