let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "True"
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "True" 
};


// Imprimir todas os valores das chaves dos objetos usando um for/in

for (const key in info && info2) {
  if (key == "recorrente" && info[key] == "True" && info2[key] == "True") {
    console.log("Ambos são recorrentes");
  }
  else if(key == "recorrente" && info[key] == "False" && info2[key] == "False"){
    console.log("Ambos não são recorrentes");
  }
  else{
    console.log(info[key] +" e "+ info2[key]);
  }
}
