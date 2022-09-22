###  Atividade de fixação 2:

O objetivo do programa é modelar o comportamento de veículos. Inicialmente, supõe-se que há apenas um tipo de veículo que `voa(fly)` e `move(drive)` definido por `IVehicle` e implementado em `FuturisticCar`.

```
// ./interfaces.ts
export interface IVehicle {
  drive(): void;
  fly(): void;
}
```

```
// ./FuturisticCar.ts
import { IVehicle } from './interfaces';

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
```


Requisito 1 - Implemente um novo tipo de veículo com a classe `Car` a partir da interface existente. Esse veículo deve somente ser capaz se mover.

Requisito 2 - Implemente um novo tipo de veículo com a classe `AirPlane` a partir da interface existente. Esse veículo deve somente ser capaz de voar.

Requisito 3 - Aplique o `Princípio da Segregação de Interfaces` com o objetivo de separar a implementação de cada tipo de veículo.

