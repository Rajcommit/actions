import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the logo with descriptive alt text', () => {
    render(<App />);
    const logo = screen.getByRole('img', { name: /github actions logo/i });
    expect(logo).toBeInTheDocument();
  });
});
