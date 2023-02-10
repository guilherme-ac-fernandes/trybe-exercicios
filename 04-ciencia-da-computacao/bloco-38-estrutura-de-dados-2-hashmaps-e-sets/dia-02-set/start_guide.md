## Como começar?

<summary> Passo a Passo </summary>


1. Crie o ambiente virtual que será utilizado para instalar as dependências

```bash
python3 -m venv .venv
```

2. Ative o ambiente virtual que foi criado

```bash
source .venv/bin/activate
```

3. Instale os requerimentos deste repositório 

```bash
python3 -m pip install -r dev-requirements.txt
```

`python3 -m pip freeze` = mostra dependências


4. Caso exista testes, utilize o comando a seguir

```bash
python3 -m pytest
```