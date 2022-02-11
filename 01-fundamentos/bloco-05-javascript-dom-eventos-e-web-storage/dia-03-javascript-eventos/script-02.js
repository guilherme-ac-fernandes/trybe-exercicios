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
    }

    // Exercício 2

    let holidayButtonPosition = document.querySelector(".buttons-container");
    let holidayButton = document.createElement("button");
    holidayButton.id = "btn-holiday";
    holidayButton.innerText = "Feriado";
    holidayButtonPosition.appendChild(holidayButton);

    function createButton(string) {
        
    }



