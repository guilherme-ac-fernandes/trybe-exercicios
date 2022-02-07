let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// Criar uma função para informar a palavra com mais caracteres prsente no array

function maisCaracteres (array) {
    let biggerString = 0;
    let biggerStringSize = array[0].length;
    for (let i = 0; i < array.length; i+=1) {
        if (array[i].length > biggerStringSize) {
            biggerStringSize = array[i].length;
            biggerString = array[i];
        }
    }
    console.log("O maior nome presente no array é " + biggerString + " com " + biggerStringSize + " caracteres.");
}

maisCaracteres(array);