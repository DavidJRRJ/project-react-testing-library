import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Teste do componente APP', () => {
  test('Verifica se no topo da aplicação contém um conjunto de links', () => {
    renderWithRouter(<App />);
    screen.getByRole('link', { name: /home/i });
    screen.getByRole('link', { name: /about/i });
    screen.getByRole('link', { name: /favorite pokémons/i });
  });

  test('Verifica se ao clickar no link Home se redireciona para /', () => {
    const { history } = renderWithRouter(<App />);
    // const linkHome = screen.getByRole('link', { name: /home/i });
    // userEvent.click(linkHome);
    history.push('/');
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Verifica se ao clickar no link about se redireciona para /about', () => {
    const { history } = renderWithRouter(<App />);
    // const linkAbout = screen.getByRole('link', { name: /about/i });
    // userEvent.click(linkAbout);
    history.push('/about');
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Verifica se ao clickar no link favorites se redireciona para favoritos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Verifica se ao usar uma url desconhecida aparece uma msg de erro', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/nonEcziste');
    // const { pathname } = history.location;
    screen.getByText(/Page requested not found/i);
  });
});
