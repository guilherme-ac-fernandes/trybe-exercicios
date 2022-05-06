import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', () => {
    const digimon = {
      name:"Angemon",
      img:"https://digimon.shadowsmith.com/img/angemon.jpg",
      level:"Champion",
    };

    render(<Digimon digimon={ digimon } />);

    const digimonName = screen.getByRole('heading', { name: /angemon/i, level: 2 });
    const level = screen.getByText(/champion/i);
    const image =  screen.getByAltText(/angemon/i);

    expect(digimonName).toBeInTheDocument();
    expect(level).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('renders erro', () => {
    const errorMessage = 'There was an issue';
    const digimon = {
      name:"Angemon",
      img:"https://digimon.shadowsmith.com/img/angemon.jpg",
      level:"Champion",
    };

    render(<Digimon digimon={ digimon } error={ errorMessage } />);
    const error = screen.getByText(errorMessage);
    expect(error).toBeInTheDocument();
  });
});
