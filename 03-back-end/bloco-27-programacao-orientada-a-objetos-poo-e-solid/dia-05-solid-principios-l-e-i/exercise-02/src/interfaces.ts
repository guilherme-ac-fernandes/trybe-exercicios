export interface IDrive {
  drive(): void;
}

export interface IFly {
  fly(): void;
}

export interface IVehicle extends IDrive, IFly  {}