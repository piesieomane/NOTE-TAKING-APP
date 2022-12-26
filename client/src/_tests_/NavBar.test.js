// text Navbar component to render correctily using the store provider anf the react router dom

import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { NavBar } from '../components/NavBar';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

expect(
  'NavBar component to render correctily using the store provider and the react router dom',
  () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
  }
);
