// Criar função que retorne a maior palavra presente na frase 

function biggerString(string) {
  let arrayString = string.split(' ');
  let biggerWord = arrayString[0];

  for (let i = 0; i < arrayString.length; i += 1) {
    if (biggerWord.length < arrayString[i].length) {
      biggerWord = arrayString[i];
    }
  }
  return console.log(biggerWord);
}

biggerString('Antônio foi no banheiro e não sabemos o que aconteceu');
