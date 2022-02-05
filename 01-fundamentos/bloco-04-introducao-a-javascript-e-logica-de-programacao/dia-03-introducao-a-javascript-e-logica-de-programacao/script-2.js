let word = 'tryber';
let wordInverse = null;

// Algoritmo que inverta palavras

for (let i = word.length-1; i >= 0; i-=1) {
    if (i === word.length-1) {
        wordInverse = word[i];
    }
    else{
        wordInverse = wordInverse + word[i];
    }
}

console.log(wordInverse);

