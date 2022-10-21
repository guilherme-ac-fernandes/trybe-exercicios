import IService from '../interfaces/IService';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';
import ILens, { lensZodSchema } from '../interfaces/Lens';

class LensService implements IService<ILens> {
  private _frame:IModel<ILens>;

  constructor(model:IModel<ILens>) {
    this._frame = model;
  }

  public async create(obj:unknown):Promise<ILens> {
    const parsed = lensZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._frame.create(parsed.data);
  }

  public async readOne(_id:string):Promise<ILens> {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async read():Promise<ILens[]> {
    const frames = await this._frame.read();
    if (!frames) throw new Error(ErrorTypes.EntityNotFound);
    return frames;
  }

  public async destroy(_id:string):Promise<ILens> {
    const frame = await this._frame.destroy(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async update(_id:string, obj: unknown):Promise<ILens> {
    const parsed = lensZodSchema.partial().safeParse(obj);
    if (!parsed.success) throw parsed.error;    
    const frameUpdate = await this._frame.update(_id, parsed.data);
    if (!frameUpdate) throw new Error(ErrorTypes.EntityNotFound);
    return frameUpdate;
  }
}

export default LensService;