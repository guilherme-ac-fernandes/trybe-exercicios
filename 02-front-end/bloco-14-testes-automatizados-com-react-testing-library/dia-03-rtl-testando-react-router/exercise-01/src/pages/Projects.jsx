import React from 'react';

class Projects extends React.Component {
  render() {
    const projects = [
      {bloco: 3, name: 'Lessons Learned'},
      {bloco: 4, name: 'Playground Functions'},
      {bloco: 5, name: 'Pixel Art'},
      {bloco: 5, name: 'Todo List'},
      {bloco: 5, name: 'Meme Generator'},
      {bloco: 5, name: 'Mystery Letter'},
      {bloco: 5, name: 'Color Guess'},
      {bloco: 6, name: 'Trybewarts'},
      {bloco: 7, name: 'JS Unit Tests'},
      {bloco: 8, name: 'Zoo Functions'},
      {bloco: 9, name: 'Shopping Cart'},
      {bloco: 10, name: 'Solar System'},
      {bloco: 11, name: 'Tryunfo'},
      {bloco: 12, name: 'Trybetunes'},
      {bloco: 13, name: 'FrontEnd Online Store'},
      {bloco: 14, name: 'React Tests'},
    ]
    return (
      <div>
        <h3 data-testid="projects-title">Projetos</h3>
        {projects.map((project, index) => <p key={index}>{project.name}</p>)}
      </div>
    );
  }
}

export default Projects;
