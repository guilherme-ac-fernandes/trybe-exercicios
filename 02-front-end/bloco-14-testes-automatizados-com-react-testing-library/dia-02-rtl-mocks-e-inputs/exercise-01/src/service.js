// Função para gerar número aleatório entre o 0 a 100 
// Proveniente do CodeGreeper (link: https://www.codegrepper.com/code-examples/javascript/js+random+number+between+0+and+100)
const randomNumber = () => Math.floor(Math.random() * 101);


// Função que recebe string e retorna em caixa alta
const uppercase = (string) => string.toUpperCase();

// Função que recebe string e retorna a primeira letra
const firstLetter = (string) => string[0];

// Função que concatena duas strings
const concatenate = (string1, string2) => string1 + string2;

// Função que realiza uma requisição em uma API
// Resolução proveniente do gabarito presente no course da Trybe (link: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/solutions/96709d24-8962-42f8-9318-a5dac56aacc5/exercicios/9cd35e26-f4a5-43cb-8b6e-70ab19fd0c6c?use_case=calendar)
const fetchAPI = async () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)
    )
  );
}

module.exports = { randomNumber, uppercase, firstLetter, concatenate, fetchAPI };
