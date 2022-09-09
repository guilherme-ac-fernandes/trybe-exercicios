enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata"
}

enum Doors {
  DRIVER = "da pessoa motorista",
  PASSENGER = "do passageiro ao lado do motorista",
  BEHIND_DRIVER = "do passageiro atrás do motorista",
  BEHIND_PASSENGER = "do passageiro oposto transversalmente ao motorista",
}

enum Directions {
  LEFT = "esquerda",
  RIGHT = "direita",
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzinando: BIP BIP!');
  }
  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta ${door}.`);
  }
  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta ${door}.`);
  }
  turnOn(): void {
    console.log('Carro Ligado!');
  }
  turnOff(): void {
    console.log('Carro Desligado!');
  }
  speedUp(): void {
    console.log('Acelerando...');
  }
  speedDown(): void {
    console.log('Desacelerando...');
  }
  stop(): void {
    console.log('Parando o carro.');
  }
  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}.`);
  }
}

// const
// console.log(new Car('Fiat', Colors.WHITE, 4).honk());

