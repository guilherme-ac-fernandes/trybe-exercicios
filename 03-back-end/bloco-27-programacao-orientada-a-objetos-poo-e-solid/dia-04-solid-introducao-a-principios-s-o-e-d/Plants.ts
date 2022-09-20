import fs from 'fs/promises';
import { randomUUID } from 'crypto';
import path from 'path';

interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo {
  createdPlants: number,
}

const plantsNeedSun = (id: string) => (plant: IPlant): boolean =>
  plant.id === id
    && plant.needsSun
    && (!plant.specialCare
      || plant.specialCare.waterFrequency > 2);

class Plants {
  private PLANTS_PATH = path.join(__dirname, 'plantsData.json');
  private OPS_INFO_PATH = path.join(__dirname, 'opsInfo.json');

  async readPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.PLANTS_PATH, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  async writePlants(newPlants: IPlant[]): Promise<void> {
    await fs.writeFile(this.PLANTS_PATH, JSON.stringify(newPlants, null, 2));
  }

  async readOps(): Promise<IOpsInfo> {
    const opsRaw = await fs.readFile(this.OPS_INFO_PATH, { encoding: 'utf8' });
    const ops: IOpsInfo = JSON.parse(opsRaw);
    return ops;
  }

  async writeOps(newPlants: IOpsInfo): Promise<void> {
    await fs.writeFile(this.OPS_INFO_PATH, JSON.stringify(newPlants, null, 2));
  }

  private async updateOpsInfo(incrementAmount = 1): Promise<void> {
    const opsInfo = await this.readOps();
    opsInfo.createdPlants += incrementAmount;
    await this.writeOps(opsInfo);
  }

  public static initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: { ...specialCare, waterFrequency },
      size,
    };
    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plants = this.readPlants();
    return plants;
  }

  public async getPlantById(id: string): Promise<IPlant | null> {
    const plants = await this.getPlants();
    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(id: string): Promise<IPlant | null> {
    const plants = await this.getPlants();
    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;
    const newPlants = plants.filter((plant) => plant.id !== id);
    await this.writePlants(newPlants);
    await this.updateOpsInfo(-1);
    return removedPlant;
  }

  public async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    const plants = await this.getPlants();
    const filteredPlants = plants.filter(plantsNeedSun(id));
    return filteredPlants;
  }

  public async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant> {
    const plants = await this.getPlants();

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await this.writePlants(updatedPlants);
    return newPlant;
  }

  public async savePlant(plant: IPlant): Promise<IPlant> {
    const plants = await this.getPlants();

    const newPlant = Plants.initPlant({ ...plant, id: randomUUID() });
    plants.push(newPlant);
    await this.updateOpsInfo(1);
    await this.writePlants(plants);
    return newPlant;
  }
}

export default Plants;