import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderWithRouter from './helpers/renderWithRouter';
import App from './App';

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

    const homeTitle = screen.queryByTestId('home-title');
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

    const homeTitle = screen.queryByTestId('home-title');
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
    const homeTitle = screen.getByTestId('home-title');
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

    const homeTitle = screen.queryByTestId('home-title');
    expect(homeTitle).not.toBeInTheDocument();

    const projectsTitle = screen.getByTestId('projects-title');
    expect(projectsTitle).toBeInTheDocument();
  });
  
});
