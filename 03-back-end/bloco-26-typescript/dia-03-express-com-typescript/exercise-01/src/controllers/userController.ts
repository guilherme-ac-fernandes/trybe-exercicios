import userServices from '../services/userServices';
import { Request, Response } from 'express';

const getAll = async (_req: Request, res: Response) => {
  const users = await userServices.getAll();

  res.status(200).json(users);
}

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userServices.getById(Number(id));

  res.status(200).json(user);
};

export default { getAll, getById};
