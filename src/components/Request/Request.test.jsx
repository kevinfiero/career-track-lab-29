import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Request from './Request';

describe('Request component', () => {
  afterEach(() => cleanup());
  it('renders Request', () => {
    const { asFragment } = render(<Request
      button="POST"
      url="https://reqres.in/api/users"
      inputField= '{"name": "sasa","job": "leader"}'
      onChange={jest.fn()}
      onClick={jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
