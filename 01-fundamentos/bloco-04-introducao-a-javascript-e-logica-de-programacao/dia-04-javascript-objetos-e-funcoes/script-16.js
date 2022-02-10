const romanNumber = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}


// Código que recebe uma string em algoritmos romanos e retorne o valor númerico

// Resolução proveniente do course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes-gabarito/solutions/ef3e9fa4-a8e5-44e9-95be-02c46ad7ddd7/conteudos/722331e5-1456-4228-be11-ae909862d5a5?use_case=calendar


function findingRomanNumber (number) {
  number = number.toUpperCase()
	const size = number.length;
	let soma = romanNumber[number[size-1]];
	let atual = romanNumber[number[size-1]];
	for (let i = 2; i <= size; i+=1) {
		const prox = romanNumber[number[size-i]];
			if (atual <= prox){
				soma += prox;
			}
			else {
				soma -= prox;
			}
		atual = prox;
	}
	console.log(soma)
	// return soma;
}

findingRomanNumber("XLIX"); //49
findingRomanNumber("LXIX"); //69
findingRomanNumber("LXXXIX"); //89
findingRomanNumber("XCIX"); //99
findingRomanNumber("XXXIX"); //39
findingRomanNumber("CLIV"); //154
