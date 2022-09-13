import { Request, Response } from "express";
import IPost from "../interface/IPost";
import PostService from "../services/postService";

export default class PostController {
  private service: PostService;

  constructor() {
    this.service = new PostService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const posts = await this.service.getAll();
    return res.status(200).json(posts);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await this.service.getById(Number(id));
    if (!post) {
      return res.status(404).json({ message: 'Post not found'});
    }
    return res.status(200).json(post);
  };

  public create = async (req: Request, res: Response) => {
    const post = req.body as IPost;
    const newPost = await this.service.create(post);
    return res.status(201).json(newPost);
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = req.body as IPost;
    const response = await this.service.update(Number(id), post);
    if (typeof response === 'string') {
      const [code, message] = response.split('|');
      return res.status(Number(code)).json(message);
    }
    return res.status(201).json(response);
  }

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const response = await this.service.remove(Number(id));
    const [code, message] = response.split('|');
    return res.status(Number(code)).json(message);
  };

  public filterByText = async (req: Request, res: Response) => {
    const search = req.query.q as string;
    const response = await this.service.filterByText(search);
    if (typeof response === 'string') {
      const [code, message] = response.split('|');
      return res.status(Number(code)).json(message);
    }
    return res.status(200).json(response);
  }

}