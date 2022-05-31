import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '@common/Counter/Counter';

const films = [
  {
    id: 1,
    img: 'joker.jpeg',
    text: 'joker',
    alt: 'joker',
  },
];

describe('Film Count  component', () => {
  it('Film Count render with data ', () => {
    render(<Counter objects={films} counterName="Films" />);
    expect(screen.queryByRole('1')).toBeNull();
  });
});
