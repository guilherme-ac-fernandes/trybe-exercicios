
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


// A utilização do evento Change foi proveniente do course da Trybe
// Source: https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/solutions/f634de75-f0c9-4520-8252-9f83b228a88a/gabarito-dos-exercicios/6aabbb7c-0784-4e12-8576-e3d43ce0fe88?use_case=calendar
window.onload = function (params){
  // Função para mudar cor da página com quatro opções
  let color = document.querySelector("select:nth-of-type(1)");
  color.addEventListener("change", function () {
    document.body.style.backgroundColor = color.value;
    let colorString = JSON.stringify(color.value);
    localStorage.setItem("Background Color", colorString);
  })

  // Função para mudar a cor do texto
  let colorText = document.querySelector("select:nth-of-type(2)");
  let allText = document.querySelectorAll(".text");
  colorText.addEventListener("change", function () {
    for (let i = 0; i < allText.length; i += 1) {
      allText[i].style.color = colorText.value;      
    }
    let colorTextString = JSON.stringify(colorText.value);
    localStorage.setItem("Text Color", colorTextString);
  })

  // Função para mudar o tamanho da fonte
  let font = document.querySelector("select:nth-of-type(3)");
  let paragraph = document.querySelector("p");
  font.addEventListener("change", function () {
    paragraph.style.fontSize = font.value;

    let fontSize = JSON.stringify(font.value);
    localStorage.setItem("Font Size", fontSize);
  })

  // Função para alterar o espaçamento entre linhas
  let lines = document.querySelector("select:nth-of-type(4)");
  lines.addEventListener("change", function () {
    let article = document.querySelector("article p");
    article.style.lineHeight = lines.value;
    let lineHeight = JSON.stringify(lines.value);
    localStorage.setItem("Line Height", lineHeight);
  })

  // Função que altera o tipo da fonte
  let fontFamily = document.querySelector("select:nth-of-type(5)");
  let 
  fontFamily.addEventListener("change", function () {
    .style.fontFamily = fontFamily.value;
  })





};

