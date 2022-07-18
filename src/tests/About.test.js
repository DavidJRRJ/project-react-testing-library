import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
// import App, { About } from '../App';
import About from '../pages/About';

describe('Teste do componente About', () => {
  test('Testa se a página contém as infos sobre a Pokedex', () => {
    renderWithRouter(<About />);
    screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all/i,
    );
    screen.getByText(
      /one can filter pokémons by type, and see more details for each one of them/i,
    );
  });

  test('Testa se apágina contém um h2 com txt About Pokedex', () => {
    renderWithRouter(<About />);
    screen.getByRole('heading', { name: /about pokédex/i }, { level: 2 });
  });

  test('Testa se a página contém a imagem da Pokedex', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(img).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
