const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

// Documentação do splice (link: https://www.w3schools.com/jsref/jsref_splice.asp) - Resolução de ter apenas o número 4 foi por tentativas nos 'try it yourself' e deu certo
const retrievesFavoriteCards = () => favoriteCards.splice(4);

// Resolução adicional proveniente do repositório que contém o exercício (link: https://github.com/tryber/exercise-magic-card/blob/gabarito-exercise-two/tests/magic.test.js)
// const retrievesFavoriteCards = () => {
//   favoriteCards.splice(4, favoriteCards.length - 4);
// }; // Foi colocado o segundo parâmetro referente ao número de itens a ser removido (opcional)

describe(' Testa a função saveFavoriteMagicCard', () => {
  // Após cada teste as cards favoritos retornam para as quatro iniciais
  afterEach(() => retrievesFavoriteCards());

  // Testa se um novo card foi adicionado aos cards favoritos
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toMatch('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);

  });

  // Testa condição inicial dos cards favoritos
  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    const arrayNames = favoriteCards.map((element) => element.name);
    const arrayExpected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(arrayNames).toEqual(arrayExpected);
  });
});
