const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// Criar objeto juntando informações de dois array (nome e média das notas)
function studentAverage(array1, array2) {
  return array1.map((element, index) => {
    return {
      name: element,
      average: array2[index].reduce((acc, curr) => acc + curr, 0) / array2[index].length,
    };
  });
};

console.log(studentAverage(students, grades));
