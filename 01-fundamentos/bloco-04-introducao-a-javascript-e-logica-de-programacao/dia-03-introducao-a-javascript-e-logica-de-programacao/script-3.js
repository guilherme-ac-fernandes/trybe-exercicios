let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0].length;
let bigWordString = 0;
let smallWord = array[0].length;
let smallWordString = 0;

// Informar maior e menor palavras no Array


// Maior palavra
for (let i = 0; i < array.length; i+=1) {
    if (array[i].length > bigWord) {
        bigWord = array[i].length;
        bigWordString = array[i];
    }
    
}

console.log("Maior palavra do Array:",bigWord, "(", bigWordString, ")");

// Menor palavra
for (let j = 0; j < array.length; j+=1) {
    if (array[j].length < smallWord) {
        smallWord = array[j].length;
        smallWordString = array[j];
    }
    
}

console.log("Menor palavra do Array:", smallWord, "(", smallWordString, ")");

