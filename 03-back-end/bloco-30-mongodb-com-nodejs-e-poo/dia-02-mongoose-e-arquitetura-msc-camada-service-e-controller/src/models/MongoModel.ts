import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T):Promise<T> {
    return this._model.create({ ...obj });
  }
    
  public async readOne(_id: string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }

  public async read():Promise<T[] | null> {
    return this._model.find();
  }

  public async destroy(_id: string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _id });
  }

  public async update(_id: string, obj: Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  // public async insertMany(array: T[]):Promise<T[] | null> {
  //   return this._model.insertMany(array);
  // }
}

export default MongoModel;