const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

// Imprimir as informações de Marte de forma assíncrona (4 segundos)
setTimeout(() => getPlanet(), 4000); // Podemos colocar o setTimeot após a função ou dentro (na linha 9, segunda resolução proveniente do gabarito da Trybe)