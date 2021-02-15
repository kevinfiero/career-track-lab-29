import * as React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import RESTY from './RESTY';

describe('RESTY Container', () => {
  afterEach(() => cleanup());
  it('displays RESTY page', async() => {
    render(<RESTY />);

    const ul = screen.getByText('Response');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
