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
