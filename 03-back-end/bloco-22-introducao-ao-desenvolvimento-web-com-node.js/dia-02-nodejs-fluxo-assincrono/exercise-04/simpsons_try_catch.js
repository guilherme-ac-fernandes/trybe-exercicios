const fs = require('fs').promises;

const simpsonsJson = './simpsons.json';
const simpsonsFamilyJson = './simpsonsFamily.json';

const readAllSimpsons = async () => {
  try {
    console.log('--------------------------------------');
    console.log('Todos os Simpsons do Arquivo:');
    const fileContent = await fs.readFile(simpsonsJson, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

    strings.forEach(string => console.log(string));
  } catch (err) {
    console.log(`Erro (readAllSimpsons): ${err.message}`);
  }
}

const readOneSimpsons = async (idFind) => {
  try {
    const fileContent = await fs.readFile(simpsonsJson, 'utf8');
    const simpsons = JSON.parse(fileContent);
    if (idFind < 0 || idFind > simpsons.length) {
      throw new Error('id não encontrado');
    }
    const string = simpsons.filter(({ id }) => {
      if (id == idFind) return true;
    })[0];
    console.log(`
    --------------------------------------
    Simpson Escolhido: (${string.id}) ${string.name}
    --------------------------------------
    `);
  } catch (err) {
    console.log(`Erro (readOneSimpsons): ${err.message}`);
  }
}

const readRemoveSimpsons = async () => {
  try {
    console.log('--------------------------------------');
    console.log('Quase todos os Simpsons do Arquivo:');
    const fileContent = await fs.readFile(simpsonsJson, 'utf8');
    const simpsons = await JSON.parse(fileContent).filter(({ id }) => {
      if (id === '6') return false;
      if (id === '10') return false;
      return true;
    });
    simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
    fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  } catch (err) {
    console.log(`Erro (readRemoveSimpsons): ${err.message}`);
  }
}

const createNewSimpsonsFile = async () => {
  try {
    const fileContent = await fs.readFile(simpsonsJson, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.filter(({ id }) => {
      if (Number(id) < 5) return true;
    });
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(strings));
  } catch (err) {
    console.log(`Erro (createNewSimpsonsFile): ${err.message}`);
  }
}

const addNewSimpsonToTheFile = async (name) => {
  try {
    const fileContent = await fs.readFile(simpsonsFamilyJson, 'utf8');
    const simpsons = JSON.parse(fileContent);
    simpsons.push({"id": `${simpsons.length + 1}`, name})
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
  } catch (err) {
    console.log(`Erro (addNewSimpsonToTheFile): ${err.message}`);
  }
}

const changeSimpsonInFile = async (newName) => {
  try {
    const fileContent = await fs.readFile(simpsonsFamilyJson, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map((item) => {
      if (item.name === 'Nelson Muntz') {
        return { 'id': item.id, 'name': newName };
      }
      return item;
    });
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(strings));
  } catch (err) {
    console.log(`Erro (changeSimpsonInFile): ${err.message}`);
  }
}

const execute = async () => {
  await readAllSimpsons();
  await readOneSimpsons(4);
  await readRemoveSimpsons();
  await createNewSimpsonsFile();
  await addNewSimpsonToTheFile('Nelson Muntz');
  await changeSimpsonInFile('Maggie Simpson');
};

execute();
