## POO em Python

####  Atividade de fixação:
> Crie as classes necessárias na pasta `src` mediante os requisitos a seguir:

Requisito 1 - Implemente o diagrama abaixo:

<p align="center">
  <img src="https://github.com/guilherme-ac-fernandes/trybe-exercicios/blob/main/04-ciencia-da-computacao/bloco-34-padroes-de-projeto/dia-01-poo-em-python/images/diagrama-TV.png" alt="Diagrama de classes da TV" width="40%"/>
</p>

> Atributos:
> 
> `volume` - será inicializado com um valor de `50` e só pode estar entre `0 e 99`
> 
> `canal` - será inicializado com um valor de `1` e só pode estar entre `1 e 99`
> 
> `tamanho` - será inicializado com o valor do parâmetro
> 
> `ligada` - será inicializado com o valor de `False`, pois está inicialmente desligado
> 
> Todos os atributos devem ser privados.
> 
> Métodos:
> 
> `aumentar_volume` - aumenta o volume de `1 em 1` até o máximo de `99`
> 
> `diminuir_volume` - diminui o volume de `1 em 1` até o mínimo de `0`
> 
> `modificar_canal` - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (`ValueError`) caso o valor esteja fora dos limites
> 
> `ligar_desligar` - alterna o estado da TV entre ligado e desligado (`True/False`)

<br />

Requisito 2 - Defina uma classe `Estatistica` que calcule média, mediana e moda de uma lista de números.

<p align="center">
  <img src="https://github.com/guilherme-ac-fernandes/trybe-exercicios/blob/main/04-ciencia-da-computacao/bloco-34-padroes-de-projeto/dia-01-poo-em-python/images/diagrama-estatistica.png" alt="Diagrama de classes da Estatística" width="40%"/>
</p>

Requisito 3 - Implementar os objetos das seguintes figuras geométricas:

![Diagrama de classes das figuras geométricas](https://github.com/guilherme-ac-fernandes/trybe-exercicios/blob/main/04-ciencia-da-computacao/bloco-34-padroes-de-projeto/dia-01-poo-em-python/images/diagrama-figuras.png)


Requisito 4 - Implemente um sistemas de `logs` por nível de severidade, seguindo o diagrama abaixo.

![Diagrama de classes do sistema de logs](https://github.com/guilherme-ac-fernandes/trybe-exercicios/blob/main/04-ciencia-da-computacao/bloco-34-padroes-de-projeto/dia-01-poo-em-python/images/diagrama-logs.png)

> `Classe Log`
> 
> Atributos:
> 
> `manipuladores` - Será inicializado com um conjunto de subclasses de `ManipuladorDeLog`
> 
> Métodos:
> 
> `adicionar_manipulador` - adiciona um manipulador ao conjunto de manipuladores do gerenciamento de `logs`
> 
> `info` - dispara `logs` com nível de severidade `"INFO"`
> 
> `alerta` - dispara `logs` com nível de severidade `"ALERTA"`
> 
> `erro` - dispara `logs` com nível de severidade `"ERRO"`
> 
> `debug` - dispara `logs` com nível de severidade `"DEBUG"`
> 
> `__log` - dispara os `logs` formatados para todos os manipuladores (invocado para cada nível de severidade, para evitar duplicação de código)
> 
> `__formatar` - formata os `logs` de acordo com o padrão “[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero”


> `Classe ManipuladorDeLog`:
> 
> A classe `ManipuladorDeLog` é uma interface (e, por consequência, uma classe abstrata) e deve declarar um método de classe (`classmethod`) e abstrato (`abstractmethod`) log que recebe um parâmetro mensagem ou msg

> `Classes LogEmArquivo` e `LogEmTela`:
>
> As classes `LogEmArquivo` e `LogEmTela` devem herdar de `ManipuladorDeLog` e sobrescrever o método de classe `log, salvando a mensagem em um arquivo ou a exibindo na tela, respectivamente.

