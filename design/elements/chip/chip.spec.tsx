import React from 'react';
import { render } from '@testing-library/react';
import { SampleChip } from './chip.composition';

it('should render with correct text', () => {
  const { getByText } = render(<SampleChip />);
  const rendered = getByText('Hello, World!');
  expect(rendered).toBeTruthy();
});
