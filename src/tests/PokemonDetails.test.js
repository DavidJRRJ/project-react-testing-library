import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

beforeEach(() => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
});

describe('Teste do componente PokemonDetails', () => {
  test('Verifica se as informações detalhadas aparecem na tela', () => {
    // screen.logTestingPlaygroundURL();
    screen.getByRole('heading', {
      name: /pikachu details/i,
    });
    screen.getAllByText(/pikachu/i);
    screen.getAllByText(/electric/i);
    screen.getByText(/average weight: 6\.0 kg/i);
    screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
  });

  test('Verifica se possui um h2 com o texto summary', () => {
    screen.getByRole('heading', {
      name: /summary/i,
    });
  });

  test('Verifica se existe um parágrado com o resumo do pokemon selecionado', () => {
    screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity/i,
    );
  });

  test('Verifica se existe a seção com o mapas de localização', () => {
    screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });
    const imgs = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(imgs[0]).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
    );
    expect(imgs[1]).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    );
    screen.getByText(/kanto viridian forest/i);
    screen.getByText(/kanto power plant/i);
  });

  test('Verifica a função do checkbox', () => {
    const checkbox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(checkbox);
    const img = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(img).toHaveAttribute('src', '/star-icon.svg');
  });
});
