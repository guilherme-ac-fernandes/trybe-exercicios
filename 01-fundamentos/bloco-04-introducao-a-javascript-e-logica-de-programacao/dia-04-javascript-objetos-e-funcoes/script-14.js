let number = 5;

// Criar função que receba número inteiro positivo e some todos os antecessores

function somatorio (number) {
  let sum = 0;
  for (let i = 1; i <= number; i+=1) {
    sum = sum + i;
  }
  return console.log("A soma dos números antecessores ao número", number, "(incluindo ele) é igual a", sum, ".");
}

somatorio(number);