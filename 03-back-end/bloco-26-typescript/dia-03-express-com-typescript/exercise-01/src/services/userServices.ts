import userModel from '../models/userModel';
import IUser from '../interface/IUser';

const getAll = async (): Promise<IUser[]> => {
  const users = await userModel.getAll();
  return users;
};

const getById = async (id: number): Promise<IUser> => {
  const user = await userModel.getById(id);
  return user;
};

const create = async (user: IUser): Promise<IUser | string> => {
  const userEmailExists = await userModel.getByEmail(user.email);
  if (userEmailExists) return `400|User already exists`;

  const newUser = await userModel.create(user);
  return newUser;
}

const update = async (id: number, user: IUser): Promise<IUser | string> => {
  const userExists = await userModel.getById(id);
  if (!userExists) return `404|User not found`;

  const response = await userModel.update(id, user);
  return response;
}

const remove = async (id: number): Promise<string> => {
  const userExists = await userModel.getById(id);
  if (!userExists) return `404|User not found`;

  await userModel.remove(id);
  return `200|User deleted`; 
};

const login = async (user: IUser): Promise<string> => {
  const userExists = await userModel.getByEmail(user.email);
  if (!userExists) return `404|User not found`;
  if (userExists === null || userExists.password !== user.password) {
    return `403|Invalid email or password`;
  }
  return `200|Login realizado com sucesso!`; 
};

export default { getAll, getById, create, update, remove, login };
