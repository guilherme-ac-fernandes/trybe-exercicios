let word = "desenvolvimento";


// Criar uma função que informa se a palavra é palíndromo ou não

function palindromo (word){
    let situation = null;
    let wordInverse = null;
    for (let i = word.length-1; i >= 0; i-=1) {
        if (i === word.length-1) {
            wordInverse = word[i];
        }
        else{
            wordInverse = wordInverse + word[i];
        }
    }

    if (word == wordInverse){
        console.log(word + " = é Palíndromo")
    }
    else{
        console.log(word + " = não é Palíndromo")
    }
}

palindromo (word)
