import FooCepAPI from './FooCepAPI';
import ICep from './ICep';

class CepService {
  constructor(private readonly cepApi: ICep = new FooCepAPI()) {}

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;