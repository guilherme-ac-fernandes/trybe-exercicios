let array = [2, 3, 6, 7, 10, 1];

// Encontrar maior valor no array e informar posição


function maiorValor (array){
  let biggerNumber = array[0];
  let positionBiggerNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (biggerNumber < array[i]) {
      positionBiggerNumber = i;
      biggerNumber = array[i]; 
    }
  }
  console.log("O maior número é o " + biggerNumber + " na posição "+ positionBiggerNumber + " no array");
}

maiorValor(array);