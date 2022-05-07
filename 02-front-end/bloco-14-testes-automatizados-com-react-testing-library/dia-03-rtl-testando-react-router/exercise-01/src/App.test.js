import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import renderWithRouter from './helpers/renderWithRouter';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';

describe('Teste de renderização das rotas do portfólio', () => {
  it('verifica a renderização do componente App', () => {
    renderWithRouter(<App />);

    const portfolioTitle = screen.getByRole('heading', { name: /meu portifólio/i, leve: 1 });
    expect(portfolioTitle).toBeInTheDocument();
  });

  // About
  it('verifica a renderização do componente About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');

    const homeTitle = screen.queryByTestId('home-container');
    expect(homeTitle).not.toBeInTheDocument();

    const aboutTitle = screen.getByTestId('about-title');
    expect(aboutTitle).toBeInTheDocument();
  });

  // Contact
  it('verifica a renderização do componente Contact', () => {
    const { history } = renderWithRouter(<App />);

    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
    userEvent.click(contactLink);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/contact');

    const homeTitle = screen.queryByTestId('home-container');
    expect(homeTitle).not.toBeInTheDocument();

    const contactTitle = screen.getByTestId('contact-title');
    expect(contactTitle).toBeInTheDocument();
  });

  // Home
  it('verifica a renderização do componente Home', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
    const homeTitle = screen.getByTestId('home-container');
    expect(homeTitle).toBeInTheDocument();
  });

  // Projects
  it('verifica a renderização do componente Projects', () => {
    const { history } = renderWithRouter(<App />);

    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
    userEvent.click(projectsLink);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/projects');

    const homeTitle = screen.queryByTestId('home-container');
    expect(homeTitle).not.toBeInTheDocument();

    const projectsTitle = screen.getByTestId('projects-title');
    expect(projectsTitle).toBeInTheDocument();
  });

  // Elementos no Home
  it('verifica a renderização dos elementos na página home', () => {
    const name = /guilherme/i;
    const { history } = renderWithRouter(<Home />);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    // Avalia nome do Guilherme
    const profileName = screen.getByRole('heading', { name, level: 2 });
    expect(profileName).toBeInTheDocument();

    // Avalia presença da foto
    const profilePhoto = screen.getByAltText(name);
    expect(profilePhoto).toBeInTheDocument();

    // Avalia presença da foto
    const profileDescription = screen.getByText(/contagem/i);
    expect(profileDescription).toBeInTheDocument();

    // Avalia presença das habilidades
    const skills = ['HTML', 'CSS', 'Javascript', 'Jest', 'React']
    skills.forEach((skill) => {
      const profileSkill = screen.getByText(skill);
    expect(profileSkill).toBeInTheDocument();
    });
  });

  // Avalia os Elementos no Contact renderizando o componente
  it('verifica a renderização dos elementos na página contact', () => {
    renderWithRouter(<Contact />);

    const inputName = screen.getByLabelText(/nome/i);
    expect(inputName).toBeInTheDocument();

    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();

    const inputTextArea = screen.getByLabelText(/mensagem de contato/i);
    expect(inputTextArea).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /enviar/i });
    expect(buttonSubmit).toBeInTheDocument();
  });

  // Avalia os Elementos no Contact a partir do App
  it('verifica a renderização dos elementos na página contact a partir do App', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/contact');
    });

    const inputName = screen.getByLabelText(/nome/i);
    expect(inputName).toBeInTheDocument();

    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();

    const inputTextArea = screen.getByLabelText(/mensagem de contato/i);
    expect(inputTextArea).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /enviar/i });
    expect(buttonSubmit).toBeInTheDocument();
  });

  // Avalia comportamento dos inputs
  it('verifica o comportamento dos inputs na tela com os valores válidos', () => {
    renderWithRouter(<Contact />);

    const inputName = screen.getByLabelText(/nome/i);
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, 'name');
    expect(inputName).toHaveValue('name');

    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'test@test.com');
    expect(inputEmail).toHaveValue('test@test.com');
    

    const inputTextArea = screen.getByLabelText(/mensagem de contato/i);
    expect(inputTextArea).toHaveValue('');
    userEvent.type(inputTextArea, 'message');
    expect(inputTextArea).toHaveValue('message');
    

    const buttonSubmit = screen.getByRole('button', { name: /enviar/i });
    userEvent.click(buttonSubmit);
    expect(inputName).toHaveValue('');
    expect(inputEmail).toHaveValue('');
    expect(inputTextArea).toHaveValue('');
  });

  it('verifica o comportamento do input name com valor inválido', () => {
    renderWithRouter(<Contact />);

    const inputName = screen.getByLabelText(/nome/i);
    expect(inputName).toHaveValue('');

    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'test@test.com');
    expect(inputEmail).toHaveValue('test@test.com');
    

    const inputTextArea = screen.getByLabelText(/mensagem de contato/i);
    expect(inputTextArea).toHaveValue('');
    userEvent.type(inputTextArea, 'message');
    expect(inputTextArea).toHaveValue('message');
    

    const buttonSubmit = screen.getByRole('button', { name: /enviar/i });
    userEvent.click(buttonSubmit);
    const invalidNameMessage = screen.getByText(/O campo "Nome" é obrigatório/i);
    expect(invalidNameMessage).toBeInTheDocument();
    expect(inputEmail).not.toHaveValue('');
    expect(inputTextArea).not.toHaveValue('');
  });

  it('verifica o comportamento do input email com valor inválido', () => {
    renderWithRouter(<Contact />);

    const inputName = screen.getByLabelText(/nome/i);
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, 'name');
    expect(inputName).toHaveValue('name');

    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'test.com');
    expect(inputEmail).toHaveValue('test.com');
    
    const inputTextArea = screen.getByLabelText(/mensagem de contato/i);
    expect(inputTextArea).toHaveValue('');
    userEvent.type(inputTextArea, 'message');
    expect(inputTextArea).toHaveValue('message');
    

    const buttonSubmit = screen.getByRole('button', { name: /enviar/i });
    userEvent.click(buttonSubmit);
    const invalidEmailMessage = screen.getByText(/Email inválido/i);
    expect(invalidEmailMessage).toBeInTheDocument();
    expect(inputName).not.toHaveValue('');
    expect(inputTextArea).not.toHaveValue('');
  });

  it('verifica o comportamento do textarea com valor inválido', () => {
    renderWithRouter(<Contact />);

    const inputName = screen.getByLabelText(/nome/i);
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, 'name');
    expect(inputName).toHaveValue('name');

    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'test@test.com');
    expect(inputEmail).toHaveValue('test@test.com');
    

    const inputTextArea = screen.getByLabelText(/mensagem de contato/i);
    expect(inputTextArea).toHaveValue('');
    

    const buttonSubmit = screen.getByRole('button', { name: /enviar/i });
    userEvent.click(buttonSubmit);

    const invalidMessageMessage = screen.getByText(/O campo "Mensagem de Contato" é obrigatório/i);
    expect(invalidMessageMessage).toBeInTheDocument();
    expect(inputName).not.toHaveValue('');
    expect(inputEmail).not.toHaveValue('');
  });
});
