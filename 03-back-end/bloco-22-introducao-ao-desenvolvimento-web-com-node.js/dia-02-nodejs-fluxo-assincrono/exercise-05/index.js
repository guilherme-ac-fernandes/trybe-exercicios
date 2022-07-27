// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-fluxo-assincrono-gabarito/solutions/d879167c-aac1-4dea-9a81-08d2f5de4d20/fixando-os-aprendizados/50ce1f32-ab2d-48e9-82ae-331dfdf90c10?use_case=calendar

const fs = require('fs').promises;

const arrayToFile = async () => {
  const strings = [
    'Finalmente',
    'estou',
    'usando',
    'Promise.all',
    '!!!',
  ];

  const createFilesPRomises = strings.map((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, JSON.stringify(string));
  });

  await Promise.all(createFilesPRomises);
  
  const fileNames = strings.map((_, index) => `./file${index + 1}.txt`)
    
  const readFilesPromises = fileNames
    .map((fileName) => fs.readFile(fileName, 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message)));
  
  await Promise.all(readFilesPromises);

  const allFileContent = strings.join(' ');
  await fs.writeFile('./fileAll.txt', allFileContent);
}

arrayToFile();