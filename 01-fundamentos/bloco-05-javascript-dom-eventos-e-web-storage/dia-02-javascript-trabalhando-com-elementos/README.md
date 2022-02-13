## JavaScript - Trabalhando com Elementos


#### Atividade de fixação 1:
> A partir do arquivo código abaixo crie um `index-01.html` e `script-01.js`, para realizar as seguintes modificações:

```
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

Requisito 1 - Acesse o elemento `elementoOndeVoceEsta`.

Requisito 2 - Acesse `pai` a partir de `elementoOndeVoceEsta` e adicione uma `color` a ele.

Requisito 3 - Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele.

Requisito 4 - Acesse o `primeiroFilho` a partir de `pai`.

Requisito 5 - Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta`.

Requisito 6 - Agora acesse o texto `Atenção!` a partir de `elementoOndeVoceEsta`.

Requisito 7 - Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta`.

Requisito 8 - Agora acesse o `terceiroFilho` a partir de `pai`.

Requisito 9 - Crie um irmão para `elementoOndeVoceEsta`.

Requisito 10 - Crie um filho para `elementoOndeVoceEsta`.

Requisito 11 - Crie um filho para `primeiroFilhoDoFilho`.

Requisito 12 - A partir desse filho criado, acesse `terceiroFilho`.

Requisito 13 - Remova todos os elementos filhos de `paiDoPai` exceto `pai`, `elementoOndeVoceEsta` e `primeiroFilhoDoFilho`.



#### Atividade de fixação 2:
> A partir do arquivo código fornecido crie um `index-02.html` e realize as seguintes modificações:
- O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags `<script>` e `</script> `.

Requisito 1 - Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`.

Requisito 2 - Adicione a tag `main` com a classe `main-content` como filho da tag `body`.

Requisito 3 - Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no requisito 2.

Requisito 4 - Adicione a tag `p` como filho do `section` criado no requisito 3 e coloque algum texto;

Requisito 5 - Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no requisito 2.

Requisito 6 - Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no requisito 2.

Requisito 7 - Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image` . Esse elemento deve ser filho do `section` criado no requisito 5.

Requisito 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um , dois , três , …` como valores da lista. Essa lista deve ser filha do `section` criado no requisito 6.

Requisito 9 - Adicione 3 tags `h3`, todas sendo filhas do `main` criado no requisito 2.


- Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

Requisito 10 - Adicione a classe `title` na tag `h1` criada.

Requisito 11 - Adicione a classe `description` nas 3 tags `h3` criadas.

Requisito 12 - Remova a `section` criado no requisito 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`.

Requisito 13 - Centralize a `section` criado no requisito 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`.

Requisito 14 - Troque a cor de fundo do elemento pai da `section` criada no requisito 3 (aquela que possui a classe `center-content`) para a cor verde.

Requisito 15 - Remova os dois últimos elementos (`nove` e `dez`) da lista criada no requisito 8.


