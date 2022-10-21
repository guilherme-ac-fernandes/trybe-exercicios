import { model as mongooseCreateModel, Schema } from 'mongoose';
import ILens from '../interfaces/Lens';
import MongoModel from './MongoModel';

// A remoção do campo "__v": 0 pode ser removida com o versionKey: false, solução proposta
// pelo colega de turma Rafael Moraes (Turma 20 B)
const lensMongooseSchema = new Schema<ILens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
}, {
  versionKey: false,
});

class Lens extends MongoModel<ILens> {
  constructor(model = mongooseCreateModel('Lens', lensMongooseSchema)) {
    super(model);
  }
}

export default Lens;