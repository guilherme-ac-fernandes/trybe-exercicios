const readline = require('readline-sync');

const calculatorSpeed = (distancia, tempo) => {
  console.log('-------------------------------');
  console.log(`Foram percorridos ${distancia}m em ${tempo}s`);
  return (distancia / tempo);
};

const executeFunction = () => {
  const DISTANCIA_METROS = readline.questionFloat('Qual a distância (em metros)? ');
  const TEMPO_SEG = readline.questionFloat('Qual foi o tempo gasto (em segundos)? ');

  const speed = calculatorSpeed(DISTANCIA_METROS, TEMPO_SEG);
  console.log(`Resultando na velocidade média de ${speed.toFixed(2)}m/s`);
  console.log('-------------------------------');
}

executeFunction();