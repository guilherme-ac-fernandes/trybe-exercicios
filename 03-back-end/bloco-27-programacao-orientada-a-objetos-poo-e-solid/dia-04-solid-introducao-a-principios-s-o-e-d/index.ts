// Resolução baseada no gabarito presente no course da Trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/62c97d81-c729-445d-9e9f-f636a5c24231/day/d5d5de7d-7f64-4317-928c-1981fe076cd9/lesson/397a316e-f4a4-4516-9b61-389af92b019a/solution
import express, { Request, Response } from 'express';

// eslint-disable-next-line import/no-unresolved, import/extensions
import Plants from './Plants';

const app = express();
const PORT = 3001;

const plantsModule = new Plants();
const PLANT_NOT_FOUND = { message: 'Plant not Found!' };

app.use(express.json());

const URL_PLANTS_ID = '/plant/:id';

app.get('/plants', async (_req: Request, res: Response) => {
  const plants = await plantsModule.getPlants();
  return res.status(200).json(plants);
});

app.get(URL_PLANTS_ID, async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.getPlantById(id);
  if (!plant) {
    return res.status(404).json(PLANT_NOT_FOUND);
  }
  return res.status(200).json(plant);
});

app.delete(URL_PLANTS_ID, async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletePlant = await plantsModule.removePlantById(id);
  if (!deletePlant) {
    return res.status(404).json(PLANT_NOT_FOUND);
  }
  return res.status(204).end();
});

app.put(URL_PLANTS_ID, async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;

  const plant = await plantsModule.editPlant(id, newPlant);
  if (!plant) {
    return res.status(404).json(PLANT_NOT_FOUND);
  }
  return res.status(200).json(plant);
});

app.post('/plant', async (req: Request, res: Response) => {
  const newPlant = req.body;

  const plant = await plantsModule.savePlant(newPlant);
  return res.status(201).json(plant);
});

app.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const plant = await plantsModule.getPlantsThatNeedsSunWithId(id);
  return res.status(200).json(plant);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
