import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    render(<App />);
    
    const button = screen.getByRole('button', { name: /search digimon/i });
    expect(button).toBeInTheDocument();

    const input = screen.getByLabelText(/digimon/i);
    expect(input).toBeInTheDocument();
  });

  it('verifica o valor do input', async () => {
    render(<App />);

    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    
    expect(input).toHaveValue('');
    userEvent.type(input, 'patamon');
    userEvent.click(button);
    expect(input).toHaveValue('patamon');
    
    
  });

  it('verifica se a busca por um digimon é bem sucessida', async () => {
    const digimon = [{
      name:"Angemon",
      img:"https://digimon.shadowsmith.com/img/angemon.jpg",
      level:"Champion",
    }];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon)
    });

    render(<App />);
    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    
    userEvent.type(input, 'angemon');
    userEvent.click(button);

    const digimonName = await screen.findByRole('heading', { name: /angemon/i, level: 2 });
    const level = await screen.findByText(/champion/i);
    const image = await screen.findByAltText(/angemon/i);

    expect(digimonName).toBeInTheDocument();
    expect(level).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/angemon'
    );
  });

  it('verifica se a busca por um valor inválido', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.'

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ErrorMsg})
    });

    render(<App />);
    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    userEvent.type(input, 'pikachu');
    userEvent.click(button);
    expect(input).toHaveValue('pikachu');

    expect(global.fetch).toBeCalled();
    const notFound = await screen.findByText(ErrorMsg);
    expect(notFound).toBeInTheDocument();
  });

  it('verifica se input vazio, não renderiza nada', () => {
    global.fetch = jest.fn();

    render(<App />);

    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    
    expect(input).toHaveValue('');
    userEvent.click(button);
    
    expect(global.fetch).toBeCalledTimes(0);
  });


  it('verifica se a busca por um digimon é apresentar erro', async () => {
    const error = 'There was an issue with this fetch';
    const ErrorMsg = `Erro ao fazer a requisição: ${error}`;

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(error)
    });

    render(<App />);
    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    
    userEvent.type(input, 'erro');
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(1);
  });

});
