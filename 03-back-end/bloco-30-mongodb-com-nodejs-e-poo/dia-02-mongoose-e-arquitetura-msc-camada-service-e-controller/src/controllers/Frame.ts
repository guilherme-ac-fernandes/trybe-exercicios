import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import IFrame from '../interfaces/Frame';

export default class FrameController {
  constructor(private _service: IService<IFrame>) { }

  public async create(
    req: Request,
    // Usamos o IFrame como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo IFrame
    res: Response<IFrame>,
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<IFrame>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }
}
