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

// Imprimir informações do último morador do bloco 2

console.log("O morador do bloco", moradores.blocoDois.length, "de nome", moradores.blocoDois[1].nome, moradores.blocoDois[1].sobrenome, "mora no", moradores.blocoDois[1].andar + "° andar, apartamento", moradores.blocoDois[1].apartamento + ".");