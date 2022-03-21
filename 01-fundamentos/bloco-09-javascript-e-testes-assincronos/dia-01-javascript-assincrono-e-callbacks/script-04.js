const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// Criar a função sendMarsTemperature que imprime "Mars temperature is: 20 degree Celsius", por exemplo
const sendMarsTemperature = () => {
  setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay());
};

sendMarsTemperature();
