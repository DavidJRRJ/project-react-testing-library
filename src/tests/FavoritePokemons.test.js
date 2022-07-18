import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Teste do componente FavoritePokemons', () => {
  test('Verifica a mensagem de quando não há nenhum pokemon adicionado', () => {
    renderWithRouter(<FavoritePokemons />);
    screen.getByText(/no favorite pokemon found/i);
  });
});
