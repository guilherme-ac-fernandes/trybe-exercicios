const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// Criar a função sendMarsTemperature com dois callback nas situações de sucesso e erro, sendo:
// condição 1: callback => temperatureInFahrenheit + handleError, com as mensagens = "It is currently 47ºF at Mars" ou "Error getting temperature: Robot is busy"
// condição 2: callback => greet + handleError, com as mensagens = "Hi there! Curiosity here. Right now is 53ºC at Mars" ou "Error getting temperature: Robot is busy"
const sendMarsTemperature = (OnSucess, onError) => {
  const sucessRate = Math.random() <= 0.6; // Corresponde a 60%
  if (sucessRate) {
    const marsTemperature = getMarsTemperature();
    setTimeout(() => OnSucess(marsTemperature), messageDelay());
  } else {
    const errorReason = 'Robot is busy';
    onError(errorReason);
  }
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
