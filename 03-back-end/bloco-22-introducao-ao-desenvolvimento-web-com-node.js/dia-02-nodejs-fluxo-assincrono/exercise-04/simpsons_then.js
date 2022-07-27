const fs = require('fs').promises;

const simpsonsJson = './simpsons.json';
const simpsonsFamilyJson = './simpsonsFamily.json';

const readAllSimpsons = async () => {
  await fs.readFile(simpsonsJson, 'utf8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

    strings.forEach(string => console.log(string));
  })
  .catch((err) => {
    console.log(`Erro (readAllSimpsons): ${err.message}`);
  });
}

const readOneSimpsons = (idFind) => {
  fs.readFile(simpsonsJson, 'utf8')
  .then((fileContent) => {
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
  })
  .catch((err) => {
    console.log(`Erro (readOneSimpsons): ${err.message}`);
  });
}

const readRemoveSimpsons = () => {
  fs.readFile(simpsonsJson, 'utf8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.filter(({ id }) => {
      if (id === '6') return false;
      if (id === '10') return false;
      return true;
    });
    strings.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  })
  .catch((err) => {
    console.log(`Erro (readRemoveSimpsons): ${err.message}`);
  });
}

const createNewSimpsonsFile = () => {
  fs.readFile(simpsonsJson, 'utf8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.filter(({ id }) => {
      if (Number(id) < 5) return true;
    });
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(strings));
  })
  .catch((err) => {
    console.log(`Erro (createNewSimpsonsFile): ${err.message}`);
  });
}

const addNewSimpsonToTheFile = (name) => {
  fs.readFile(simpsonsFamilyJson, 'utf8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    simpsons.push({"id": `${simpsons.length + 1}`, name})
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
  })
  .catch((err) => {
    console.log(`Erro (addNewSimpsonToTheFile): ${err.message}`);
  });
}

const changeSimpsonInFile = (newName) => {
  fs.readFile(simpsonsFamilyJson, 'utf8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map((item) => {
      if (item.name === 'Nelson Muntz') {
        return { 'id': item.id, 'name': newName };
      }
      return item;
    });
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(strings));
  })
  .catch((err) => {
    console.log(`Erro (changeSimpsonInFile): ${err.message}`);
  });
}

// neste formato não conseguimos executar na sequência correta
const execute = () => {
  readAllSimpsons();
  readOneSimpsons(4);
  readRemoveSimpsons();
  createNewSimpsonsFile();
  addNewSimpsonToTheFile('Nelson Muntz');
  changeSimpsonInFile('Maggie Simpson');
};

execute();
