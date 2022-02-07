let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "Sim"
};

// Imprimir todas os valores das chaves do objeto usando um for/in

for (const key in info) {
  console.log(info[key]);
}
