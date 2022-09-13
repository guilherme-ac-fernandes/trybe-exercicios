import userModel from '../models/userModel';
import User from '../interface/userInterface';

const getAll = async (): Promise<User[]> => {
  const users = await userModel.getAll();
  return users;
};

const getById = async (id: number): Promise<User> => {
  const user = await userModel.getById(id);
  return user;
};

export default { getAll, getById };
