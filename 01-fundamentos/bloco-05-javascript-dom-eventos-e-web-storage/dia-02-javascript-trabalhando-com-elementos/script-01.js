
// Acessar elemento aonde estou
document.getElementById("elementoOndeVoceEsta");

// Acessar "pai" em referência aonde estou e colocar cor a partir do "elementoOndeVoceEsta"
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

// Acessar "primeiroFilhoDoFilho" e adicionar texto a ele a partir do "elementoOndeVoceEsta"
document.getElementById("elementoOndeVoceEsta").firstElementChild.innerText = "Eu sou o primeiro Filho do Filho";

// Acessar "primeiro filho do pai" a partir do pai
document.getElementById("pai").firstElementChild;

// Acessar "primeiro filho do pai" a partir do "elementoOndeVoceEsta"
document.getElementById("elementoOndeVoceEsta").parentElement.firstElementChild;

// Acessar "Atenção" a partir do "elementoOndeVoceEsta"
document.getElementById("elementoOndeVoceEsta").nextSibling;

// Acessar "terceiro filho" a partir do "elementoOndeVoceEsta"
document.getElementById("elementoOndeVoceEsta").nextElementSibling;

// Acessar "terceiro filho" a partir do "pai"
document.getElementById("pai").lastElementChild.previousElementSibling;

// Criar "irmão" para "elementoOndeVoceEsta"
let newSibling = document.getElementById("pai");
let newSiblingContent = document.createElement('section');
newSiblingContent.innerText = "Novo Irmão";
newSibling.appendChild(newSiblingContent);

// Criar "filho" para "elementoOndeVoceEsta"
let newChild = document.getElementById("elementoOndeVoceEsta");
let newChildContent = document.createElement('section');
newChildContent.innerText = "Novo Filho";
newChild.appendChild(newChildContent);

// Criar "filho" para "primeiroFilhoDoFilho"
let newChildChild = document.getElementById("primeiroFilhoDoFilho");
let newChildChildContent = document.createElement('section');
newChildChildContent.innerText = "Novo Filho do Filho";
newChildChild.appendChild(newChildChildContent);

// Acessar o "terceiro filho criado"
document.getElementById("primeiroFilhoDoFilho").firstElementChild.parentElement.parentElement.nextElementSibling

// Remover todos os elementos "filhos de paiDoPai", exceto "pai"; "elementoOndeVoceEsta" e "primeiroFilhoDoFilho"
let dad = document.getElementById("pai");

// for (let i = dad.childNodes.length - 1; i >= 0; i -= 1) {
//     let currentChildren = dad.childNodes[i];
//     if (currentChildren !== "elementoOndeVoceEsta") {
//         currentChildren.remove();
//     }
// }