###  Atividade de fixação 1:

O programa retorna informações relacionadas ao `cep` de uma pessoa e tem duas funcionalidades:

* Consultar um endereço a partir de um `cep` e um número de um logradouro.

* Consultar um `cep` a partir de um endereço e um número de um logradouro.

```
// ./FooCepAPI.ts
class FooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;
```

```
// ./CepService.ts
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor() {
    this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
```

```
// ./index.ts
import CepService from './CepService';

async function main() {
  const cepSvc = new CepService();

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
```


Requisito 1 - Aplique a técnica de injeção de dependência para que a classe `CepService` diminua seu nível de acoplamento com a dependência `FooCepAPI`.

Requisito 2 - A classe `CepService` ainda depende de uma implementação concreta para as chamadas da `API` e `CEP`. Aplique o princípio da `Inversão de dependência` para fazer com que a classe `CepService` fique completamente desacoplada.

Requisito 3 - Implemente uma classe `MockCepApi` usada para realização de testes unitários.

