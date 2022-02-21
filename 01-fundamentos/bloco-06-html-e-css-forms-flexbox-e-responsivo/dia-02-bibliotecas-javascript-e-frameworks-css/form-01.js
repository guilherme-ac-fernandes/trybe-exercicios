const submitButton = document.getElementById('submitButton');
const agreedImage = document.getElementById('concordo3');
const nameInput = document.getElementById('input-nome');
const emailInput = document.getElementById('input-email');
const textInput = document.getElementById('input-texto-longo');
const placeInput = document.querySelectorAll('.opcao');

// Pegar o dia mínimo para o calendário, função presente no link abaixo
// source: https://www.codegrepper.com/code-examples/javascript/get+current+date+javascript+yyyy-mm-dd
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //
let yyyy = today.getFullYear();
today = yyyy +'-'+ mm +'-'+ dd;

// Incluindo Pikaday na input da data
// source: https://github.com/Pikaday/Pikaday
const dateInput = document.getElementById('data');
let picker = new Pikaday({ 
  field: document.getElementById('data'),
  minDate: new Date(today),

});

// Incluindo biblioteca JavaScript de validação
// source: https://github.com/horprogs/Just-validate
const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form');

validation
  .addField('#input-nome', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    }
  ])
  .addField('#input-email', [
    {
      rule: 'maxLength',
      value: 50,
    }
  ])
  .addField('#input-texto-longo', [
    {
      rule: 'maxLength',
      value: 500,
    }
  ]);

window.onload = () => {
  agreedImage.addEventListener('click', () => {
    if (agreedImage.checked === true) {
      const imagePosition = document.getElementById('div-img');
      const image = document.createElement('input');
      image.type = 'file';
      image.class = 'agreedImage'
      imagePosition.appendChild(image);
    }
  });
}