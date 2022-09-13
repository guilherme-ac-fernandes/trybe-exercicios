import IPost from "../interface/IPost";
import connection from "../models/connection";
import PostModel from "../models/postModels";

export default class PostService {
  private model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  public async getAll(): Promise<IPost[]> {
    const posts: IPost[] = await this.model.getAll();
    return posts;
  };

  public async getById(id: number): Promise<IPost> {
    const post: IPost = await this.model.getById(Number(id));
    return post;
  };

  public async create(post: IPost): Promise<IPost> { 
    const newPost = await this.model.create(post);
    return newPost;
  }

  public async update(id: number, post: IPost): Promise<IPost | string> {
    const postExists = await this.model.getById(id);
    if (!postExists) return '404|Post not found';

    const response = await this.model.update(id, post);
    return response;
  }

  public async remove(id: number): Promise<string> {
    const postExists = await this.model.getById(id);
    if (!postExists) return '404|Post not found';

    await this.model.remove(id);
    return '200|Post deleted';
  }

  public async filterByText(search: string): Promise<IPost[] | string> {
    const filterPost = await this.model.filterByText(search);
    if (!filterPost || filterPost.length === 0) {
      return '404|Post not found';
    }
    return filterPost;
  }



}