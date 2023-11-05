import { render } from '@testing-library/react';

import SharedThemeStylesReact from './shared-theme-styles-react';

describe('SharedThemeStylesReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedThemeStylesReact />);
    expect(baseElement).toBeTruthy();
  });
});
