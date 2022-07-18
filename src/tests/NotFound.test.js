import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import { NotFound } from '../pages';

describe('Teste do componente NotFound', () => {
  test('Testa se a página contém um h2 com uma msg de erro', () => {
    renderWithRouter(<NotFound />);
    screen.getByRole('heading', {
      name: /page requested not found/i,
    });
  });

  test('Testa se a página mostra uma imagem com link específico', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(img).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
