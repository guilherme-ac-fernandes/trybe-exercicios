// Objeto proveniento do Requisito 3 do exercício 3 (script-03.js)
const allLessons = {
  lesson1: { 
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã' 
  },
  lesson2: { 
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite' 
  },
  lesson3: { 
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite' 
  }
};
console.table(allLessons);
console.log('----------------------------------------------------');

// Criar uma função para informar números de alunos da aula de Matemática
const students = (object) => {
  const keys = Object.keys(object)
  let studentsTotal = 0;
  for (let i = 0; i < keys.length; i += 1) {
    const numberStudents = object[keys[i]]['numeroEstudantes'] 
    if (object[keys[i]]['materia'] === 'Matemática') {
      studentsTotal += numberStudents;
    }
  }
  return studentsTotal;
}

console.log(`O  número de estudantes em de Matemática é igual a ${students(allLessons)}`);
console.log('----------------------------------------------------');

// Criar função que retorne um relatório do(a) professor(a)
const createReport = (object, teacher) => {
  const lesson = Object.keys(object);
  const report = {};
  let arrayClass = [];
  let students = 0;
  for (let i = 0; i < lesson.length; i += 1) {
    if (object[`${lesson[i]}`]['professor'] === teacher) {
      students += object[`${lesson[i]}`]['numeroEstudantes'];
      arrayClass.push(object[`${lesson[i]}`]['materia']);
    } 
  }
  report['professor'] = teacher;
  report['aulas'] = arrayClass;
  report['numeroEstudantes'] = students;
  return console.log(report);
}

createReport(allLessons, 'Maria Clara');
createReport(allLessons, 'Carlos');