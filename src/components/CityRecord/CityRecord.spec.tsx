import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import * as Mocks from 'utils/mocks';
import { Interfaces } from 'store';
import { CityRecord, ComponentProps } from './CityRecord';

describe('CityRecord', () => {
  const defaultProps: ComponentProps = {
    item: {
      loading: false,
      error: undefined,
      data: {
        name: 'sydney',
        rain: Mocks.getRainData(),
        snow: Mocks.getSnowData(),
        temprature: Mocks.getMainData().temp,
        conditions: Mocks.getConditions().map(c => {
          const { icon } = c;
          delete c.icon;
          const condition: Interfaces.Condition = {
            ...c,
            icon_url: `http://www.icons.com/${icon}`,
          };
          return condition;
        }),
        wind: Mocks.getWindData(),
      },
    },
  };
  let renderer: RenderResult;

  const setup = (props = defaultProps) => {
    return render(<CityRecord {...props} />);
  };
  beforeEach(() => {
    renderer = setup();
  });

  it('should render successfully', () => {
    const { container } = renderer;
    expect(container.firstChild).toMatchSnapshot();
  });

  it('check when an error occurs, will show an alert error', () => {
    const props: ComponentProps = {
      ...defaultProps,
      item: {
        ...defaultProps.item,
        error: 'Error',
      },
    };
    renderer = setup(props);
    const { container } = renderer;
    expect(container).toBeTruthy();
    const alertItem = renderer.getByRole('alert');
    expect(alertItem).toBeTruthy();
  });

  it('check when data return is empty, will show an alert error', () => {
    const props: ComponentProps = {
      ...defaultProps,
      item: {
        ...defaultProps.item,
        error: 'Error',
        data: undefined,
      },
    };
    renderer = setup(props);
    const { container } = renderer;
    expect(container).toBeTruthy();
    const alertItem = renderer.getByRole('alert');
    expect(alertItem).toBeTruthy();
  });

  it('check when loading is set to true, show a spinner', () => {
    const props: ComponentProps = {
      ...defaultProps,
      item: {
        ...defaultProps.item,
        loading: true,
      },
    };
    renderer = setup(props);
    const { container } = renderer;
    expect(container).toBeTruthy();
    const loadingItem = renderer.getByText('Loading...');
    expect(loadingItem).toBeTruthy();
  });
});
