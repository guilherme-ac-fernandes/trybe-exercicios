import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import ILens from '../interfaces/Lens';

export default class LensController {
  constructor(private _service: IService<ILens>) { }

  public async create(req: Request, res: Response<ILens>) {
    const { degree, antiGlare, blueLightFilter } = req.body;
    const lens = { degree, antiGlare, blueLightFilter };
    const results = await this._service.create(lens);
    return res.status(201).json(results);
  }

  public async readOne(req: Request, res: Response<ILens>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async read(_req: Request, res: Response<ILens[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async destroy(req: Request, res: Response<ILens>) {
    const result = await this._service.destroy(req.params.id);
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<ILens>) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }
}
