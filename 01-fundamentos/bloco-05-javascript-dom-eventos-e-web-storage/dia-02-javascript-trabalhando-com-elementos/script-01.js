
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

// Solução 1
// let dad = document.querySelectorAll("#pai section");
// for (let i = 0; i < dad.length; i += 1) {
//     if (dad[i].id === "primeiroFilhoDoFilho"){
//     }
//     else if (dad[i].id !== "elementoOndeVoceEsta") {
//         dad[i].remove();
//     }
// }

// Solução 2
// Remove todos os filhos da seção pai
// Resolução com grande auxílio do Frederico Leles (Turma 20, Tribo B) e do mentor técnico Matheus Guedes 
let dad = document.querySelector("#pai");
let dadChildren = dad.childNodes;
for (let j = dadChildren.length - 1; j >= 0; j -= 1) {
    let currentChild = dadChildren[j];
    if (currentChild.id !== "elementoOndeVoceEsta") {
        currentChild.remove();
    }
}
// Remove irmão do "primeiroFilhoDoFilho"
let secondChild = document.getElementById("elementoOndeVoceEsta").lastChild;
secondChild.remove();
