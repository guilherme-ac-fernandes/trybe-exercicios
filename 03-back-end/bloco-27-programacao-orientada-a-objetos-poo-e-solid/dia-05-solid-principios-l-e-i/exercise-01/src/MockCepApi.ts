import ICep from "./ICep";

class MockCepApi implements ICep {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço MOCK para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP MOCK para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default MockCepApi;