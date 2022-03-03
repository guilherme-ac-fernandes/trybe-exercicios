// Posições dos elementos
const paragraph = document.getElementById('counter')
const buttonPosition = document.getElementById('button');

// Variével de contagem
let counter = 0;

// Definição do contador zerado na página web
paragraph.innerHTML = counter;

buttonPosition.addEventListener('click', () => {
  paragraph.innerHTML = counter += 1;
})