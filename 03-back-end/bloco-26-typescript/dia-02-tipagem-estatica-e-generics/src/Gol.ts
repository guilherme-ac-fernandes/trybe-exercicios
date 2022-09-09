import Car from "./Car"
import Colors from "./enum/Colors"
import Directions from "./enum/Directions"
import Doors from "./enum/Doors"

const gol = new Car('Volkswagen', Colors.SILVER, 4);

gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();

gol.openTheDoor(Doors.BEHIND_PASSENGER);
gol.closeTheDoor(Doors.BEHIND_PASSENGER);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_PASSENGER);
gol.closeTheDoor(Doors.BEHIND_PASSENGER);
gol.speedUp();
