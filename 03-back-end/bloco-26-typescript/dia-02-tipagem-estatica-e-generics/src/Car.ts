import Colors from "./enum/Colors";
import Doors from "./enum/Doors";
import Directions from "./enum/Directions";

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

export default Car;
