let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Imprimir o nome completo dos moradores do bloco 1


for (let i = 0; i < moradores.blocoUm.length; i++) {
	console.log("No", moradores.blocoUm[i].andar + "° andar, apartamento", moradores.blocoUm[i].apartamento, "mora", moradores.blocoUm[i].nome, moradores.blocoUm[i].sobrenome);
}


for (let i = 0; i < moradores.blocoDois.length; i++) {
	console.log("No", moradores.blocoDois[i].andar + "° andar, apartamento", moradores.blocoDois[i].apartamento, "mora", moradores.blocoDois[i].nome, moradores.blocoDois[i].sobrenome);
}