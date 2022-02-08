let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// Criar uma função que encontre os números pares dentro do vetor/array


function arrayOfNumbers(array) {
  array = array.flat();
  let arrayEven = [];
  for (let i = 1; i <= array.length; i+=1) {
    if(array[i] % 2 == 0){
      arrayEven.push(array[i]);
    }
  }
    console.log(arrayEven);
}

arrayOfNumbers(vector);