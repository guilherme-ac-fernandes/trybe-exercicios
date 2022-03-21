const uppercase = require('./script-07');

test('Testa ser uppercase transforma letras minúsculas em maiúsculas', (done) => {
  uppercase('guilherme', (result) => {
    try {
      expect(result).toBe('GUILHERME');
      done();
    } catch (error) {
      done(error);
    }
  });
});