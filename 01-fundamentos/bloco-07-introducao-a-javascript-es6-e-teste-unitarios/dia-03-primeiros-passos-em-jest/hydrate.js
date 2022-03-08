// Arquivo com a função que sera submetida aos testes

function hydrate(string) {
  string = string.split('');
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
		let number = parseInt(string[i]);
		if (isNaN(number) === false) {
			count += number;
		}
  }
  if (count === 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = hydrate;