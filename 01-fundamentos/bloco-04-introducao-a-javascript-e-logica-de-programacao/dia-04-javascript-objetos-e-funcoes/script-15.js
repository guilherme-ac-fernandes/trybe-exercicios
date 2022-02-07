let stringWord = "trybe";
let stringEnding = "be";

// Comparar os ultimos caracteres de uma string com outra string menor 


function verifyStringEnding(stringWord, stringEnding) {
	if (stringWord.length > stringEnding.length) {
		let stringWordEnding = stringWord.slice(-stringEnding.length)
  	let check = 0;
    for (let i = 0; i < stringWordEnding.length; i+=1) {
      if (stringEnding[i] == stringWordEnding[i]){
        check +=1;
      }
    }
    if (check == stringWordEnding.length) {
      console.log("Verificação Correta");
			console.log("A palavra", stringWord, "com final (" + stringWordEnding + ") é equivalente aos caracteres de comparação fornecido (" + stringEnding + ").");
			// return true;
    }
    else{
      console.log("Verificação Incorreta");
			console.log("A palavra", stringWord, "com final (" + stringWordEnding + ") não é equivalente aos caracteres de comparação fornecido (" + stringEnding + ").");
			// return false;
    }
	}
	else{
		console.log("A palavra ("+ stringWord + ") é menor que os caracteres de comparação (" + stringEnding + ").");
	
	}
}

verifyStringEnding(stringWord, stringEnding);