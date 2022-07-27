// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-fluxo-assincrono-gabarito/solutions/d879167c-aac1-4dea-9a81-08d2f5de4d20/fixando-os-aprendizados/50ce1f32-ab2d-48e9-82ae-331dfdf90c10?use_case=calendar

const fs = require('fs').promises;
const readline = require('readline');

// Interface de leitura de dados inserida no terminal pelo ReadLine
function question(message) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();
      resolve(answer);
    });
  });
}

const readFile = async () => {
  const FILE = await question('Qual arquivo deseja ler? ');
  try {
    const fileContent = await fs.readFile(`./${FILE}`, 'utf8');
    console.log(`
    --------------------------------------
    Arquivo escolhido:
    ${fileContent}
    --------------------------------------
    `);
    
    const STRING_TO_REPLACE = await question('Qual palavra será substituída? ');
    const NEW_STRING = await question('Insira a nova palavra que tomará o lugar da antiga? ');

    const newfileContent = fileContent.replace(new RegExp(STRING_TO_REPLACE, 'g'), NEW_STRING);
    console.log(`
    --------------------------------------
    Novo Arquivo:
    ${newfileContent}
    --------------------------------------
    `);

    const NEW_FILE_NAME = await question('Qual o nome do arquivo de destino? ');
    await fs.writeFile(`./${NEW_FILE_NAME}`, newfileContent);

  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

readFile();