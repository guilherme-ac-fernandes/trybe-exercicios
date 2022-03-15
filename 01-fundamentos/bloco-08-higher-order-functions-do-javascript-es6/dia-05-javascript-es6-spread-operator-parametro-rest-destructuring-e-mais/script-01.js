// Modifique o código para retornar as áreas em sequência (usando spread operator)
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const triangleArea = () => {
  let result = 'Áreas dos triângulos: ';
  rectangles.forEach((rectangle) => {
    const area = rectangleArea(...rectangle);
    result += `${area}, `
  });
  // Utilização do replace com expressões regulares proveniente do site Masteringjs
  // source: https://masteringjs.io/tutorials/fundamentals/remove-last-character
  // $ - significa no final da string
  // . - significa qualquer caracter
  return result.replace(/..$/, '.');
};

console.log(triangleArea());
