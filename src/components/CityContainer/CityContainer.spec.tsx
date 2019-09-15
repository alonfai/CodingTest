import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import store, { Interfaces } from 'store';
import CityContainer, { ComponentProps } from './CityContainer';

describe('CityContainer', () => {
  const location: Interfaces.LocationInput = {
    cityName: 'mountain view',
    countryCode: 'au',
  };
  const defaultProps: ComponentProps = {
    location,
  };
  let renderer: RenderResult;

  const setup = (props = defaultProps) => {
    return render(
      <Provider store={store}>
        <CityContainer {...props} />
      </Provider>,
    );
  };
  beforeEach(() => {
    renderer = setup();
  });

  it('should render successfully', () => {
    const { container } = renderer;
    expect(container.firstChild).toMatchSnapshot();
  });
});
