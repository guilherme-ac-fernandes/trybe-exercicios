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

// Requisito 4
describe('Testes de implementações nas funções uppercase, firstLetter e concatenate', () => {
  it('verifica a implementação de nova funcionalidade a função uppercase', () => {
    // Implementação da funcionalidade 
    service.uppercase = jest.fn()
      .mockImplementation((string) => string.toLowerCase());
    
    service.uppercase('PALAVRA');
    expect(service.uppercase).toHaveBeenCalled();
    expect(service.uppercase).toHaveBeenCalledTimes(1);
    expect(service.uppercase('PALAVRA')).toBe('palavra');
    expect(service.uppercase).toHaveBeenCalledTimes(2);
    expect(service.uppercase).toHaveBeenLastCalledWith('PALAVRA');

    // Reset da funcionalidade
    service.uppercase.mockReset();
    expect(service.uppercase('PALAVRA')).toBe(undefined);
    expect(service.uppercase).toHaveBeenCalledTimes(1);
    expect(service.uppercase).toHaveBeenLastCalledWith('PALAVRA');

    // service.uppercase.mockRestore();
    // expect(service.uppercase('palavra')).toBe('PALAVRA');
  });

  it('verifica a implementação de nova funcionalidade a função uppercase com jest.spyOn', () => {
    // Implementação da funcionalidade 
    const mockUpperCase = jest.spyOn(service, 'uppercase')
      .mockImplementationOnce((string) => string.toLowerCase());
    
    expect(mockUpperCase('PALAVRA')).toBe('palavra');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase).toHaveBeenLastCalledWith('PALAVRA');

    expect(mockUpperCase('PALAVRA')).toBe(undefined);
    expect(mockUpperCase).toHaveBeenCalledTimes(2);
    expect(mockUpperCase).toHaveBeenLastCalledWith('PALAVRA');
  });

  it('verifica a implementação de nova funcionalidade a função firstLetter', () => {
    // Implementação da funcionalidade 
    service.firstLetter = jest.fn()
      .mockImplementation((string) => string[string.length - 1]);
    
    service.firstLetter('última');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter('última')).toBe('a');
    expect(service.firstLetter).toHaveBeenCalledTimes(2);
    expect(service.firstLetter).toHaveBeenLastCalledWith('última');

    // Reset da funcionalidade
    service.firstLetter.mockReset();
    expect(service.firstLetter('última')).toBe(undefined);
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenLastCalledWith('última');
  });

  it('verifica a implementação de nova funcionalidade a função concatenate', () => {
    // Implementação da funcionalidade 
    service.concatenate = jest.fn()
      .mockImplementation((string1, string2, string3) => string1 + string2 + string3);
    
    service.concatenate('a', 'b', 'c');
    expect(service.concatenate).toHaveBeenCalled();
    expect(service.concatenate).toHaveBeenCalledTimes(1);
    expect(service.concatenate('a', 'b', 'c')).toBe('abc');
    expect(service.concatenate).toHaveBeenCalledTimes(2);
    expect(service.concatenate).toHaveBeenLastCalledWith('a', 'b', 'c');

    // Reset da funcionalidade
    service.concatenate.mockReset();
    expect(service.concatenate('a', 'b', 'c')).toBe(undefined);
    expect(service.concatenate).toHaveBeenCalledTimes(1);
    expect(service.concatenate).toHaveBeenLastCalledWith('a', 'b', 'c');
  });
});

// Requisito 5
// Resolução proveniente do gabarito presente no course da Trybe (link: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/solutions/96709d24-8962-42f8-9318-a5dac56aacc5/exercicios/9cd35e26-f4a5-43cb-8b6e-70ab19fd0c6c?use_case=calendar)
describe('Testes que verifica o retorno de uma API', () => {
  service.fetchAPI = jest.fn();
  afterEach(service.fetchAPI.mockReset)
  
  it('verifica se o retorno da API foi bem sucessida', async () => {
    service.fetchAPI.mockReturnValue('request sucess');
    
    service.fetchAPI();
    expect(service.fetchAPI).toHaveBeenCalled();
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    await expect(service.fetchAPI()).resolves.toBe('request sucess');
    expect(service.fetchAPI).toHaveBeenCalledTimes(2);
  });

  it('verifica se o retorno da API apresentou falha', async () => {
    service.fetchAPI.mockReturnValue('request sucess');
    expect(service.fetchAPI).toHaveBeenCalledTimes(0);
    await expect(service.fetchAPI()).rejects.toBe('request sucess');
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
  });
});
