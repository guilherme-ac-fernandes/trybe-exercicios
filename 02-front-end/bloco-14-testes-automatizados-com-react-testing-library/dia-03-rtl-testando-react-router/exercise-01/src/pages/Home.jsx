import React from 'react';
import photo from '../image/guilherme-fernandes.jpeg';

class Home extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'Javascript', 'Jest', 'React']
    return (
      <div data-testid="home-container">
        <h2>Guilherme Augusto do Carmo Fernandes</h2>
        <img src={photo} alt="Guilherme Fernandes" width="200px" />
        <p>Brasileiro, atualmente em Contagem/MG</p>
        <h4>Habilidades</h4>
        <ul>
          {skills.map((skill, index) => {
            if(skill === 'Javascript') {
              return <li key={ index } className="skills-decoration">{skill}</li>
            }
            return <li key={ index }>{skill}</li>
          } )}
        </ul>
        <a  href="https://github.com/guilherme-ac-fernandes" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    );
  }
}

export default Home;
