const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Criar função para adicionar chave e valor a qualquer objeto
const addKeyValue = (object, keyName, value) => object[keyName] = value;

addKeyValue(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log('----------------------------------------------------');

// Criar função para listas as keys de um objeto
const listKeysObject = (object) => Object.keys(object);

console.log(`Primeiro objeto (chaves): ${listKeysObject(lesson1)}`);
console.log(`Segundo objeto (chaves): ${listKeysObject(lesson2)}`);
console.log(`Terceiro objeto (chaves): ${listKeysObject(lesson3)}`);
console.log('----------------------------------------------------');

// Criar função para mostrar o tamanho de um objeto
const objectSize = (object) => Object.keys(object).length;

console.log(`Primeiro objeto (tamanho): ${objectSize(lesson1)}`);
console.log(`Segundo objeto (tamanho): ${objectSize(lesson2)}`);
console.log(`Terceiro objeto (tamanho): ${objectSize(lesson3)}`);
console.log('----------------------------------------------------');

// Criar função para listar os valores de um objeto
const listValuesObject = (object) => Object.values(object);

console.log(`Primeiro objeto (valores): ${listValuesObject(lesson1)}`);
console.log(`Segundo objeto (valores): ${listValuesObject(lesson2)}`);
console.log(`Terceiro objeto (valores): ${listValuesObject(lesson3)}`);
console.log('----------------------------------------------------');

// Criar objeto para agrupar as aulas em um único objeto
// Utilização de chaves para criar um objeto contendo objetos proveniente do course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-fluxo-de-excecao-e-objetos/solutions/069bdfff-c92d-4c55-9e90-94cd03d7553e/gabarito-dos-exercicios/7d2ec100-7848-4dcb-b781-b4d9b2551c55?use_case=calendar
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
console.log('----------------------------------------------------');

// Criar função para determinar o número de estudantes em todas as aulas
const students = (object) => {
  const keys = Object.keys(object)

  let studentsTotal = 0;
  for (let i = 0; i < keys.length; i += 1) {
    const numberStudents = object[keys[i]]['numeroEstudantes'] 
    studentsTotal += numberStudents;
  }
  return studentsTotal;
}

console.log(`O  número de estudantes em todas as aulas é igual a ${students(allLessons)}`);
console.log('----------------------------------------------------');

// Criar uma função para obter o valor da chave de acordo com a posição
const valueByPosition = (object, position) => {
  return Object.entries(object)[`${position}`][1]
}

console.log(valueByPosition(lesson1, 0));
console.log(valueByPosition(lesson1, 3));
console.log(valueByPosition(lesson3, 1));
console.log('----------------------------------------------------');

// Criar função para verificar se par de chave: valor existe no objeto
const verifyPair = (object, key, value) => {
  const keyArray = Object.keys(object);
  const keyPosition = keyArray.includes(`${key}`);
  const keyIndex = keyArray.indexOf(key);
  const valueArray = Object.values(object);
  const valuePosition = valueArray.includes(`${value}`);
  const valueIndex = valueArray.indexOf(value);
  if (keyPosition === true && valuePosition === true && keyIndex === valueIndex) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPair(lesson1, 'materia', 'Matemática'));
console.log(verifyPair(lesson1, 'materia', 'manhã'));