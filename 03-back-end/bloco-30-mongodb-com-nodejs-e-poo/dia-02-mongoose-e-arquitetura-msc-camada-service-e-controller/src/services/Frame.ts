import IService from '../interfaces/IService';
import IFrame, { FrameZodSchema } from '../interfaces/Frame';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class FrameService implements IService<IFrame> {
  // quando fazemos IService<IFrame> acima 
  // estamos implementando a interface com o tipo IFrame com o parâmetro genérico
  private _frame:IModel<IFrame>;
  // o mesmo fazemos aqui com a interface do Model
  constructor(model:IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj:unknown):Promise<IFrame> {
    // recebemos uma variável qualquer, e garantimos que ela é um objeto com formato correto utilizando o zod
    const parsed = FrameZodSchema.safeParse(obj);

    // agora, caso os tipos estejam errados (success = false), nós lançaremos um erro
    if (!parsed.success) {
      throw parsed.error; // vamos falar sobre como esse erro tratá-lo logo logo
    }
    return this._frame.create(parsed.data);
  }

  public async readOne(_id:string):Promise<IFrame> {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }
}

export default FrameService;