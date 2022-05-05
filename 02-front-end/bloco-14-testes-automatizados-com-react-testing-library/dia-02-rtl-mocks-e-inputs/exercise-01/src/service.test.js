const service = require('./service');

// Requisito 1
describe('Testes da função randomNumber', () => {
  it('verifica se a função foi chamada e a quantidade', () => {
    service.randomNumber = jest.fn();
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('avalia o retorno da função', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
  });
});

// Requisito 2
describe('Teste de nova implementação em cima da função randomNumber,', () => {
  it('verifica se a função foi chamada e a implementação da nova função apenas uma vez', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    service.randomNumber(4, 2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
    expect(service.randomNumber).toHaveBeenLastCalledWith(4, 2);

    // Reset remove qualquer retorno estipulado ou implementação
    service.randomNumber.mockReset();
    expect(service.randomNumber(4, 2)).toBe(undefined);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenLastCalledWith(4, 2);
  });
});

// Requisito 3
describe('Teste de novas implementações em cima da função randomNumber com mockReset para resetar entre elas,', () => {
  it('verifica a implementação de duas nova função em sequência', () => {
    // Implementação da primeira funcionalidade nova
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    service.randomNumber(4, 2, 10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber(4, 2, 10)).toBe(80);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
    expect(service.randomNumber).toHaveBeenLastCalledWith(4, 2, 10);

    // Reset da primeira funcionalidade nova
    service.randomNumber.mockReset();
    expect(service.randomNumber(4, 2, 10)).toBe(undefined);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenLastCalledWith(4, 2, 10);

    // Implementação da segunda funcionalidade nova
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    service.randomNumber(14);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber(14)).toBe(28);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
    expect(service.randomNumber).toHaveBeenLastCalledWith(14);

    // Reset da segunda funcionalidade nova
    service.randomNumber.mockReset();
    expect(service.randomNumber(14)).toBe(undefined);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenLastCalledWith(14);
  });
});