const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let organizeBasket = {
	Melancia: 0,
	Abacate: 0,
	Uva: 0,
	Laranja: 0,
	Jaca: 0,
	Pera: 0,
	Banana: 0,
}

// Criar um objeto com a quantidade de itens na cesta


for (let i = 0; i < basket.length; i+=1) {
	if (basket[i] == 'Melancia') {
		organizeBasket.Melancia +=1;
	}
	else if (basket[i] == 'Abacate') {
		organizeBasket.Abacate +=1;
	}
	else if (basket[i] == 'Uva') {
		organizeBasket.Uva +=1;
	}
	else if (basket[i] == 'Laranja') {
		organizeBasket.Laranja +=1;
	}
	else if (basket[i] == 'Jaca') {
		organizeBasket.Jaca +=1;
	}
	else if (basket[i] == 'Pera') {
		organizeBasket.Pera +=1;
	}
	else if (basket[i] == 'Banana') {
		organizeBasket.Banana +=1;
	}
}

console.log("Sua cesta possui:", );
for (const key in organizeBasket) {
	console.log(organizeBasket[key], key);
}