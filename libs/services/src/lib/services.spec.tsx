import { render } from '@testing-library/react';

import Services from './services';

describe('Services', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Services />);
    expect(baseElement).toBeTruthy();
  });
});
