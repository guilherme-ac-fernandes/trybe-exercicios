function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let individualDayPosition = document.getElementById("days");
for (let i = 0; i < dezDaysList.length; i += 1) {
  let individualDay = dezDaysList[i];
  let individualDayElement = document.createElement("li");
  individualDayElement.className = "day";
  individualDayElement.innerText = individualDay;
  individualDayPosition.appendChild(individualDayElement);
  if (individualDay === 25){
    individualDayElement.className = "day holiday friday";
  } else if (individualDay === 24 || individualDay === 31){
    individualDayElement.className = "day holiday";
  } else if (individualDay === 4 || individualDay === 11 || individualDay === 18) {
    individualDayElement.className = "day friday";
  }
};

// Exercício 2
function createButton(stringId, stringText) {
  let buttonPosition = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.id = stringId;
  button.innerText = stringText;
  buttonPosition.appendChild(button);
};
createButton("btn-holiday", "Feriado");

// Exercício 3
// Função inversa de colocar e remover destaque proveniente do course da Trybe, mas modificado para virar uma função apenas
// source: https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos-gabarito/solutions/700128ff-5150-4320-9b33-875c7e6d5a2e/gabarito-dos-exercicios/b1d700e5-2b66-48c3-8af0-310cb17eacda?use_case=calendar
function buttonChange (buttonIdString, individualClassString) {
  let buttonPosition = document.getElementById(buttonIdString);
  let button = document.querySelectorAll(individualClassString);
  let backgroundColor = "rgb(238,238,238)";
  let newBackgroundColorChange = "white";
  buttonPosition.addEventListener("click", function () {
    for (let i = 0; i < button.length; i += 1) {
      let position = button[i];
      if (position.style.background === newBackgroundColorChange) {
        position.style.background = backgroundColor;
      } else {
        position.style.background = newBackgroundColorChange;
      }
    }
  })
};
buttonChange("btn-holiday", ".holiday");

// Exercício 4
// Já tinha criado a função criar botão, apenas alterei as strings de entrada
createButton("btn-friday", "Sexta-Feira");

// Exercício 5
buttonChange("btn-friday", ".friday");

// Exercício 6
let focusDay



individualDayPosition.addEventListener("mouseover", function () {
  individualDayPosition.style.color = "blue";
});
individualDayPosition.addEventListener("mouseleave", function () {
  individualDayPosition.style.color = "black";
});


