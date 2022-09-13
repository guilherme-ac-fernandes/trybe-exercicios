import { RowDataPacket } from "mysql2";
import connection from "./connection";
import User from "../interface/userInterface";

const getAll = async (): Promise<User[]> => {
  const [users] = await connection.execute(
    'SELECT * FROM TypeScriptExpress.Users'
  );
  return users as User[];
};

const getById = async (id: number): Promise<User> => {
  const [rows] = await connection.execute(
    'SELECT * FROM TypeScriptExpress.Users WHERE id = ?',
    [id]
  );
  const [user] = rows as User[];
  return user;
};

export default { getAll, getById };