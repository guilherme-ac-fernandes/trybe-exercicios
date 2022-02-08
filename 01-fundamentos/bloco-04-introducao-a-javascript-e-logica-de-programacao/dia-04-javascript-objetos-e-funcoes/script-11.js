let array = [2, 4, 6, 7, 10, 0, -3];

// Encontrar menor valor no array e informar posição

function menorValor (array){
		
	let smallNumber = array[0];
	let positionSmallNumber = 0;

	for (let i = 0; i < array.length; i++) {
		if (smallNumber > array[i]) {
			positionSmallNumber = i;
			smallNumber = array[i];
						
		}
	}

	console.log("O menor número é o " + smallNumber + " na posição "+ positionSmallNumber + " no array");
}

menorValor(array);