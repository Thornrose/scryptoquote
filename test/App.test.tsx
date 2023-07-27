import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { App, BaseApp } from '../src/App';

// testing react router library integration
describe('App', () => {
  it('Renders "Hello!"', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello!');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/cabbage']}>
        <BaseApp />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Nothing here :(');
  });
});
