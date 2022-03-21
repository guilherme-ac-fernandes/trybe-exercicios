const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars));
console.log(planetDistanceFromSun(venus));
console.log(planetDistanceFromSun(jupiter));

// Resposta: 
// Como todas as operações acima são síncronas a ordem de finalização das execuções é síncrona, ou seja, uma deve terminar para que a outra seja executada. Sendo assim a sequência chamada é a sequência de execução: 1º mars, 2º venus e 3º jupiter.