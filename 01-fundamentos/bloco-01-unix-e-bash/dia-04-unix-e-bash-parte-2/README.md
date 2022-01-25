## Parte 1 - Comandos de Input e Output

1. Navegue até a pasta `unix_tests`.
2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet ,Unix e Bash`, um em cada linha.
3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.
4. Conte quantas linhas tem o arquivo `skills2.txt`.
5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.
6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.
7. Conte o número de linhas que contêm as letras `br`.
8. Conte o número de linhas que _não_ contêm as letras `br`.
9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.
10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`.
11. Ordene o arquivo `bunch_of_things.txt`.

##. Parte 2 - Permissões

1. Navegue até a pasta `unix_tests`.
2. Rode o comando `ls -l` e veja quais as permissões dos arquivos;
> Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`;
> Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
3. Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando `ls -l`.
> Resultado esperado: `-r—r—r— 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
4. Volte à permissão do arquivo `bunch_of_things.txt` para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt`.
> Resultado esperado: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

## Parte 3 - Processos & Jobs

1. Liste todos os processos.
2. Agora use o comando `sleep 30 &`.
3. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução.
4. Execute novamente o comando `sleep 30`, mas agora sem o `&. Depois, faça com que ele continue executando em background;
5. Crie um processo em background que rode o comando `sleep por 300 segundos.
6. Crie mais dois processos que rodem o comando `sleep` por 200 e 100 segundos, respectivamente.
> Você deve criá-los em foreground (sem usar o `&`) e suspendê-los (apertando `ctrl+z`) após cada um começar a executar.
7. Verifique que apenas o processo `sleep 300` está em execução com o comando `jobs`. Suspenda a execução desse processo.
> Você vai precisar trazer o processo para foreground (`fg`) e suspendê-lo ( ctrl+z ), ou enviar um sinal.
8. Retome a execução do processo `sleep 100` em background com o comando `bg`.
9. Termine a execução de todos os processos `sleep`.
