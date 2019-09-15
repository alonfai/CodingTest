import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import store, { Interfaces } from 'store';
import CityList, { ComponentProps } from './CityList';

describe('CityList', () => {
  const locations: Interfaces.LocationInput[] = [
    {
      cityName: 'Sydney',
      countryCode: 'au',
    },
    {
      cityName: 'Melbourne',
      countryCode: 'au',
    },
    {
      cityName: 'Brisbane',
      countryCode: 'au',
    },
  ];
  const defaultProps: ComponentProps = {
    locations,
  };
  let renderer: RenderResult;

  const setup = (props = defaultProps) => {
    return render(
      <Provider store={store}>
        <CityList {...props} />
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

  it('find headers for each of the cities been rendered', () => {
    const sydneyItem = renderer.getByTitle('Sydney');
    const melbourneItem = renderer.getByTitle('Melbourne');
    const brisbaneItem = renderer.getByTitle('Brisbane');
    expect(sydneyItem).toBeTruthy();
    expect(melbourneItem).toBeTruthy();
    expect(brisbaneItem).toBeTruthy();
  });
});
