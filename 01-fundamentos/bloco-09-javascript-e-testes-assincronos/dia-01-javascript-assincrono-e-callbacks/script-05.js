const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// Criar função sendMarsTemperature com callback nas seguintes condições:
// condição 1: callback => temperatureInFahrenheit, com a mensagem = "It is currently 47ºF at Mars"
// condição 2: callback => greet, com a mensagem = "Hi there! Curiosity here. Right now is 53ºC at Mars"
const sendMarsTemperature = (callback) => {
  const marsTemperature = getMarsTemperature();
  setTimeout(() => callback(marsTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);