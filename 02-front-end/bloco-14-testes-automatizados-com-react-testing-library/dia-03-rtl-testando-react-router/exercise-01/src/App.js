import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu portifólio</h1>
        <nav>
          <Link to="/about" >About</Link>
          <br />
          <Link to="/contact" >Contact</Link>
          <br />
          <Link to="/" >Home</Link>
          <br />
          <Link to="/projects" >Projects</Link>
        </nav>
        <Switch>
          <Route path="/about" render={ () => <About /> } />
          <Route path="/contact" render={ () => <Contact /> } />
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/projects" render={ () => <Projects /> } />
          <Route path="/*" render={ () => <NotFound /> } />
        </Switch>
      </header>
    </div>
  );
}

export default App;
