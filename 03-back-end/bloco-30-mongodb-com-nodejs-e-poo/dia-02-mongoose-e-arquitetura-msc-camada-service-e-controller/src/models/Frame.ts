import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/Frame';
import MongoModel from './MongoModel';

// A remoção do campo "__v": 0 pode ser removida com o versionKey: false, solução proposta
// pelo colega de turma Rafael Moraes (Turma 20 B)
const frameMongooseSchema = new Schema<IFrame>({
  material: String,
  color: String,
}, {
  versionKey: false,
});

class Frame extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Frame;