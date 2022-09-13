import connection from "./connection";
import IUser from "../interface/IUser";
import { ResultSetHeader } from "mysql2";

const getAll = async (): Promise<IUser[]> => {
  const [users] = await connection.execute(
    'SELECT * FROM TypeScriptExpress.Users'
  );
  return users as IUser[];
};

const getById = async (id: number): Promise<IUser> => {
  const [data] = await connection.execute(
    'SELECT * FROM TypeScriptExpress.Users WHERE id = ?',
    [id]
  );
  const [user] = data as IUser[];
  return user;
};

const getByEmail = async (email: string): Promise<IUser | null> => {
  const [data] = await connection.execute(
    'SELECT * FROM TypeScriptExpress.Users WHERE email = ?',
    [email]
  );
  const [user] = data as IUser[];
  return user || null;
};

const create = async (user: IUser): Promise<IUser> => {
  const { name, email, password } = user;

  const [dataInserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
  );

  const { insertId: id } = dataInserted;
  return { id, ...user }
};

const update = async (id: number, user: IUser): Promise<IUser> => {
  const { name, email, password } = user;

  await connection.execute<ResultSetHeader>(
    'UPDATE TypeScriptExpress.Users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id],
  );

  return { id, ...user }
};

const remove = async (id: number): Promise<void> => {
  await connection.execute<ResultSetHeader>(
    'DELETE FROM TypeScriptExpress.Users WHERE id = ?',
    [id],
  );
}

export default { getAll, getById, create, getByEmail, update, remove };
