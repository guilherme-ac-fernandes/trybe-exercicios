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