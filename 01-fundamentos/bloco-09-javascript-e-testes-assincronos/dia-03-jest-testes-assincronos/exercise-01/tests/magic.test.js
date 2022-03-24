require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  // Testa as informação do nome caso for informado um id válido
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    expect(response.name).toMatch('Ancestor\'s Chosen');
  });

  // Testa se a função informada é uma função 
  it('É uma função', () => {
    const response = getMagicCard;
    expect(typeof response).toBe('function')
  });

  // Testa se ao chamar a função com o argumento '130550' a função fetch foi chamada
  it('Se a função foi chamada com o parâmetro 130550', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledTimes(1); // Primeira possibilidade
    expect(fetch).toHaveBeenCalled(); // Segunda possibilidade
  });

  // Testa se a função com o parametro '130550' foi chamada com o endpoint correto
  it('Se a função com parâmetro 130550 foi chamada com endpoint correto', async () => {
    const url = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  // Testa se o card (objeto retornado pela função) e semelhante ao informado abaixo para o respectivo parâmetro
  it('Verifica se o retorno da função é igual ao objeto card', async () => {
    const response = await getMagicCard('130550');
    expect(response).toMatchObject(card);
  });

  // Testa a condição de erro com um idDesconhecido
  it('Verifica se ao passar um id desconhecido retorna um erro', async () => {
    const response = await getMagicCard('idDesconhecido');
    expect(response).toEqual(new Error('Id is not found!'))
  });
});

