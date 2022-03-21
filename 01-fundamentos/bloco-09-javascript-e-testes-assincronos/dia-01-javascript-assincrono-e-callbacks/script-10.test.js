const { getPokemonDetails, filterPokemon } = require('./script-08');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = new Error('Não temos esse pokémon para você :('); // Deve ser o mesmo erro do criado - Se não mostra erro (Ajuda do Instrutir Tiago e colega da trybe Rodrigo)
    const callback = (err, result) => {
      expect(err).toEqual(expectedString);
      done();
    };
    getPokemonDetails(filterPokemon('Pikachu'), callback);

  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';
    const callback = (err, result) => {
      expect(result).toBe(expectedString);
      done();
    };
    getPokemonDetails(filterPokemon('Squirtle'), callback);
  });
});

// Definir as ordens dos beforeEach e afterEach
beforeEach(() => console.log('1 - beforeEach')); // A
afterEach(() => console.log('1 - afterEach')); // B

test('', () => console.log('1 - test')); // C

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // D
  afterEach(() => console.log('2 - afterEach')); // E

  test('', () => console.log('2 - test')); // F
});

// Solução: A - C - B - A - D - F - E - C
//OBSERVAÇÃO: O beforeEach e afterEach iniciais executam sempre antes e depois de todos os testes (respectivamente), uma vez que estão no escopo global (Conceito observado no gabarito proveniente do course da trybe)
// source: https://app.betrybe.com/course/fundamentals/javascript-e-testes-assincronos/javascript-assincrono-e-callbacks-gabarito/solutions/05d29a3c-85f0-44be-989b-3b6d78e46e86/conteudos/73ef56d5-cfdb-49e1-99f5-6b5d9c02ef4d?use_case=calendar