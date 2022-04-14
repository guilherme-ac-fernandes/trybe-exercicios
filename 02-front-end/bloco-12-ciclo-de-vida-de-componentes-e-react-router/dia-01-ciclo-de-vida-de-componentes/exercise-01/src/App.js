import React, { Component } from 'react';
import './App.css';

// Resolução proveniente da monitoria com o Especialista da Turma 20B de Desenvolvimento a Front-End Gabriel Espindola
class App extends Component {
  
  constructor() {
    super()
    this.state = {
      loading: true,
      dog: [],
      name: '',
    }
    this.getPuppy = this.getPuppy.bind(this);
    this.handleName = this.handleName.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  async componentDidMount() {
    const hasPuppyOnLocalStorage = this.getPuppyFromLocalStorage();
    if (hasPuppyOnLocalStorage) {
      this.setState({
        dog: { message: hasPuppyOnLocalStorage.url },
        name: hasPuppyOnLocalStorage.name,
        loading: false,
      })
      return; // Retorna para não buscar outro cão na chamada da função abaixo
    }
    await this.getPuppy();
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  async getPuppy() {
    this.setState({ loading: true },
    async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const newDog = await response.json();

      // Verificação se o cão é Terrier, se for manter o cão anterior
      const terrierCheck = newDog.message.includes('terrier');
      if (terrierCheck) {
        console.log(`Terrier não! ${newDog.message} - Prefiro o anterior`);
      }
      this.setState((prev) => ({
        dog: terrierCheck ? prev.dog : newDog,
        loading: false,
      }), () => {
        // Armazena a url do cão no LocalStorage
        const { message } = this.state.dog;
        this.createNewUrlOnLocalStorage(message);

        // Alerta que informa a raça do cão
        alert(this.getRaca(message));
      })
    })
  }

  getRaca(url) {
    const urlSplit = url.split('/');
    const raca = urlSplit[urlSplit.length - 2];
    const nameChange = raca.split('-').join(' ');
    // Solução proveniente do Stack OverFlow (link: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript)
    const nameUpper = nameChange.charAt(0).toUpperCase() + nameChange.slice(1);
    return nameUpper;
  }

  getPuppyFromLocalStorage() {
    const urlInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlInLocalStorage !== null) {
      myUrls = JSON.parse(urlInLocalStorage);
      if (urlInLocalStorage.length === 0) return
      return myUrls[myUrls.length - 1] // se tiver informações no localStorage retorna os dados do último cão
    }
    
  }

  // updateLocalStorage(url) {
  //   //localStorage => chave(string): valor(string)
  //   // Pega as informações presente no local storage
  //   const urlInLocalStorage = localStorage.getItem('urls');
  //   let myUrls = [];
  //   if (urlInLocalStorage) {
  //     // pegar as url em formato string e converter em um array
  //     myUrls = JSON.parse(urlInLocalStorage);
  //   }
  //   myUrls.push(url);
  //   // para salvar no localStorage convertemos o array em string
  //   localStorage.setItem('urls', JSON.stringify(myUrls))
  // }

  saveName() {
    const { name } = this.state;
    this.changeNameForLastUrlOnLocalStorage(name);
    this.setState({
      name: '',
    });
  }

  createNewUrlOnLocalStorage(url) {
    const urlInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlInLocalStorage) {
      myUrls = JSON.parse(urlInLocalStorage);
    }
    myUrls.push({ url, name: '' });
    localStorage.setItem('urls', JSON.stringify(myUrls))
  }

  changeNameForLastUrlOnLocalStorage(name) {
    const urlInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlInLocalStorage) {
      myUrls = JSON.parse(urlInLocalStorage);
    }
    if (myUrls.length === 0) return
    myUrls[myUrls.length - 1].name = name;
    localStorage.setItem('urls', JSON.stringify(myUrls))
  }

  render() {
    const { loading, dog, name } = this.state;
    return (
      <div className="App">
        {loading && (<p>Loading...</p>)}
        {!loading && (
          <div className="flex">
            <img className="dog-image" src={ dog.message } alt="Puppy"/>
            <input type="text" value={ name } onChange={ this.handleName } />
            <button type="button" onClick={ this.saveName }>
              Salvar nome do cãozinho
            </button>
            <button type="button" onClick={ this.getPuppy }>
              Busque mais um cãozinho
            </button>
          </div>
        )}
      </div>
    );
  }
  
}

export default App;
