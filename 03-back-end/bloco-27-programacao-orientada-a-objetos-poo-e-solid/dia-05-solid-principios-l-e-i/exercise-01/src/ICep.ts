export default interface ICep {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, num: number): Promise<string>;
}