
// Função de mudar a cor do body - primeira tentativa
// Se quisesse criar um input e label
// function changeColorBody () {
//   colorButton.addEventListener("click", function () {
//     if (inputColor.value !== document.body.style.backgroundColor){
//       document.body.style.backgroundColor = inputColor.value;
//     } else {
//       document.body.style.backgroundColor = "white";
//     }
//   })
//   inputColor.addEventListener("keyup", function name(event) {
//     if (event.key === "Enter") {
//       if (inputColor.value !== document.body.style.backgroundColor) {
//         document.body.style.backgroundColor = inputColor.value;
//       } else{
//         document.body.style.backgroundColor = "white";
//       }
//     }       
//   })
// };
// changeColorBody();


// A utilização do evento Change e a renderização dos valores foi proveniente do course da Trybe
// Source: https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/solutions/f634de75-f0c9-4520-8252-9f83b228a88a/gabarito-dos-exercicios/6aabbb7c-0784-4e12-8576-e3d43ce0fe88?use_case=calendar
window.onload = function (params){
  // Função para mudar cor da página com quatro opções
  let color = document.querySelector("select:nth-of-type(1)");
  color.addEventListener("change", function () {
    document.body.style.backgroundColor = color.value;
    let colorString = color.value;
    localStorage.setItem("background-color", colorString);
  })

  // Função para mudar a cor do texto
  let colorText = document.querySelector("select:nth-of-type(2)");
  let allText = document.querySelectorAll(".text");
  colorText.addEventListener("change", function () {
    for (let i = 0; i < allText.length; i += 1) {
      allText[i].style.color = colorText.value;      
    }
    let colorTextString = colorText.value;
    localStorage.setItem("text-color", colorTextString);
  })

  // Função para mudar o tamanho da fonte
  let font = document.querySelector("select:nth-of-type(3)");
  let paragraph = document.querySelector("p");
  font.addEventListener("change", function () {
    paragraph.style.fontSize = font.value;
    let fontSize = font.value;
    localStorage.setItem("font-size", fontSize);
  })

  // Função para alterar o espaçamento entre linhas
  let lines = document.querySelector("select:nth-of-type(4)");
  let articleP = document.querySelector("article p");
  lines.addEventListener("change", function () {
    articleP.style.lineHeight = lines.value;
    let lineHeight = lines.value;
    localStorage.setItem("line-height", lineHeight);
  })

  // Função que altera o tipo da fonte
  function fontFamilyChange() {
    let button1 = document.getElementById("axial");
    let button2 = document.getElementById("times");
    let bodyText = document.querySelectorAll(".text");
    button1.addEventListener("click", function () {
      for (let z = 0; z < bodyText.length; z += 1) {
        bodyText[z].className = "axial"
      }
      localStorage.setItem("font-family", "axial");
    })
    button2.addEventListener("click", function () {
      for (let q = 0; q < bodyText.length; q += 1) {
        bodyText[q].className = "times"
      }
      localStorage.setItem("font-family", "times");
    })
  }
  fontFamilyChange();

  // Aplica coloração de fundo guardada
  let savedBackgroundColor = localStorage.getItem("background-color");
  document.body.style.backgroundColor = savedBackgroundColor;
  // Aplica coloração das letras
  let savedTextColor = localStorage.getItem("text-color");
  for (let x = 0; x < allText.length; x++) {
    allText[x].style.color = savedTextColor 
  };
  // Aplica tamanho da fonte
  let savedFontSize = localStorage.getItem("font-size");
  paragraph.style.fontSize = savedFontSize;
  // Aplica espaçamento entre linhas
  let savedLineHeight = localStorage.getItem("line-height");
  articleP.style.lineHeight = savedLineHeight;
  // Aplica tipo de fonte guardada
  let savedFontFamily = localStorage.getItem("font-family");
  let changeFontFamily = document.querySelectorAll(".text");
  for (let w = 0; w < changeFontFamily.length; w += 1) {
    changeFontFamily[w].className = savedFontFamily;
  }
};

