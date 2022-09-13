import { Pool, ResultSetHeader } from "mysql2/promise";
import IPost from "../interface/IPost";
import connection from "./connection";

export default class PostModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IPost[]> {
    const [users] = await connection.execute(
      'SELECT * FROM TypeScriptExpress.Posts'
    );
    return users as IPost[];
  };

  public async getById(id: number): Promise<IPost> {
    const [data] = await connection.execute(
      'SELECT * FROM TypeScriptExpress.Posts WHERE id = ?',
      [id]
    );
    const [user] = data as IPost[];
    return user;
  };

  public async create(post: IPost): Promise<IPost> {
    const { author, category, publicationDate, title } = post;
    const [dataInserted] = await connection.execute<ResultSetHeader>(
      `INSERT INTO TypeScriptExpress.Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)`,
      [title, author, category, publicationDate]
    );
   
    const { insertId: id } = dataInserted;
    return { id, ...post } as IPost;
  };

  public async update(id: number, post: IPost): Promise<IPost> {
    const { author, category, publicationDate, title } = post;
    await connection.execute<ResultSetHeader>(
      `UPDATE TypeScriptExpress.Posts 
      SET author = ?, category = ?, publicationDate = ?, title = ?
      WHERE id = ?
      `,
      [author, category, publicationDate, title, id]
    );
    return { id, ...post };
  };

  public async remove(id: number): Promise<void> {
    await connection.execute<ResultSetHeader>(
      'DELETE FROM TypeScriptExpress.Posts WHERE id = ?',
      [id]
    );
  };

  public async filterByText(search: string): Promise<IPost[]> {
    const query = `
    SELECT * FROM TypeScriptExpress.Posts 
    WHERE title LIKE ? OR
          author LIKE ? OR
          category LIKE ? OR
          publicationDate LIKE ?
    `;
    const values = [`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`];
    const [posts] = await connection.execute(query, values);
    return posts as IPost[];
  }
}