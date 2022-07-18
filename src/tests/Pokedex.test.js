import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
// import { Pokedex } from '../pages';
import App from '../App';

describe('teste do componente Pokedex', () => {
  test('Verifica se a page contém um h2 com um texto específico', () => {
    renderWithRouter(<App />);
    screen.getByRole('heading', {
      name: /encountered pokémons/i,
    });
  });

  test('testa os botões de filtro da Pokedex existem', () => {
    renderWithRouter(<App />);
    screen.getAllByTestId('pokemon-type-button');
  });

  test('testa a funcionalidade dos botões de filtro', () => {
    renderWithRouter(<App />);
    const btnEletric = screen.getByRole('button', { name: /electric/i });
    const btnAll = screen.getByRole('button', { name: /all/i });
    const btnNext = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(btnEletric);
    screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    userEvent.click(btnAll);
    userEvent.click(btnNext);
    screen.getByRole('img', {
      name: /charmander sprite/i,
    });
    userEvent.click(btnNext);
    screen.getByRole('img', {
      name: /caterpie sprite/i,
    });
  });
});
