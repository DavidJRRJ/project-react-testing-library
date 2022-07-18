import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';
import App from '../App';

describe('teste do componente Pokemon', () => {
  test('teste da renderização dos elementos do card Pokemon', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');
    const img = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    expect(name).toHaveTextContent(/pikachu/i);
    expect(type).toHaveTextContent(/electric/i);
    expect(weight).toHaveTextContent(/average weight: 6\.0 kg/i);
    expect(img).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
  });

  test('testa o link que redireciona para page details', () => {
    const { history } = renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    const linkID = screen.getByRole('link', { name: /more details/i });
    userEvent.click(btnAll);
    userEvent.click(linkID);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('testa o que acontece caso o pokemon seja favoritado', () => {
    renderWithRouter(<Pokemon isFavorite pokemon={ pokemons[0] } />);
    const img = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(img).toHaveAttribute('src', '/star-icon.svg');
  });
});
