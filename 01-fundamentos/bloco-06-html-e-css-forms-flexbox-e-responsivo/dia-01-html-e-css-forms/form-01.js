const submitButton = document.getElementById('submitButton');
const agreedImage = document.getElementById('concordo3');
const nameInput = document.getElementById('input-nome');
const emailInput = document.getElementById('input-email');
const textInput = document.getElementById('input-texto-longo');
const placeInput = document.querySelectorAll('.opcao');

function countCharacter(string) {
  let count = 0;
  for (let j = 0; j < string.length; j += 1) {
    count += 1;
  }
  return count;
}

function countPlace() {
  const opcao1 = document.getElementById('opcao1');
  const opcao2 = document.getElementById('opcao2');
  const opcao3 = document.getElementById('opcao3');
  const opcao4 = document.getElementById('opcao4');
  let count = 0;
  if(opcao1.checked === true){
    count += 1;
  }
  if(opcao2.checked === true){
    count += 1;
  }
  if(opcao3.checked === true){
    count += 1;
  }
  if(opcao4.checked === true){
    count += 1;
  }
  console.log(count);
  return count
}

window.onload = () => {
  // submitButton.addEventListener('click', (event) => {
  //   event.preventDefault();
  // });
  agreedImage.addEventListener('click', () => {
    if (agreedImage.checked === true) {
      const imagePosition = document.getElementById('imageFieldset');
      const image = document.createElement('input');
      image.type = 'file';
      image.class = 'agreedImage'
      imagePosition.appendChild(image);
    }
  });
  submitButton.addEventListener('click', () => {
    let countName = countCharacter(nameInput.value);
    let countEmail = countCharacter(emailInput.value);
    let countText = countCharacter(textInput.value);
    if (countName < 10){
      console.log('1')
      return alert('Dados Inválidos');
    } else if (countName > 50 ){
      console.log('2')
      return alert('Dados Inválidos');
    } else if (countEmail > 50 ){
      console.log('3')
      return alert('Dados Inválidos');
    } else if (countText > 500){
      console.log('4')
      return alert('Dados Inválidos');
    } else if (countPlace() !== 1){
      console.log('5')
      return alert('Dados Inválidos');
    }
    return alert('Dados enviados com sucesso!');
  })
}