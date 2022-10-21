import { Router } from 'express';
import LensController from '../controllers/Lens';
import LensModel from '../models/Lens';
import LensService from '../services/Lens';

const route = Router();

const lens = new LensModel();
const lensService = new LensService(lens);
const lensframeController = new LensController(lensService);

route.post('/', (req, res) => lensframeController.create(req, res));
route.get('/:id', (req, res) => lensframeController.readOne(req, res));
route.get('/', (req, res) => lensframeController.read(req, res));
route.delete('/:id', (req, res) => lensframeController.destroy(req, res));
route.put('/:id', (req, res) => lensframeController.update(req, res));

export default route;