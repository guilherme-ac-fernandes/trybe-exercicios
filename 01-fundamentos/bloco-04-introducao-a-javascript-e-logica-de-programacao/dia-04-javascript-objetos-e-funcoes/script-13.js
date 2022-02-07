let array = [2, 3, 2, 5, 8, 2, 3];

// Encontrar o número interior que mais se repete

function repeticao (array) {
    let maiorRepeticao = 0;
    let contador = 0;
    let numero = null;
    for (let i = 0; i < array.length; i++) {
        contador = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] == array[i]) {
                contador +=1;
            }
        }
        if (contador > maiorRepeticao){
            maiorRepeticao = contador;
            numero = array[i];
        }
        
    }
    console.log("O número com a maior repetiçõa é o " + numero + " que apareceu " + maiorRepeticao + " vezes.");
}

repeticao(array);