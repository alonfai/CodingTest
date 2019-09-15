import * as Mocks from 'utils/mocks';
import { Interfaces as API } from 'api';
import { Interfaces, actions } from '../index';
import city, { initialState } from './city';

describe('Cities Reducer', () => {
  const cityName = 'Sydney';
  const countryCode = 'AU';
  const id = `${cityName}_${countryCode}`.toLowerCase();

  it('should handle LOAD_CITY_INFORMATION', () => {
    const action = actions.LOAD_CITY_INFORMATION({
      cityName,
      countryCode,
    });
    const expectedState: Interfaces.CityStore = {
      ...initialState,
      [id]: {
        data: undefined,
        error: undefined,
        loading: true,
      },
    };
    expect(city(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_CITY_INFORMATION_SUCCESS', () => {
    const payload = Mocks.getWeatherInformation();

    const action = actions.LOAD_CITY_INFORMATION_SUCCESS(payload);
    const expectedState: Interfaces.CityStore = {
      ...initialState,
      [`${payload.name}_${payload.sys.country}`.toLowerCase()]: {
        data: {
          name: payload.name,
          temprature: payload.main.temp,
          conditions: payload.weather.map(weather => {
            delete weather.icon;
            return {
              ...weather,
              icon_url: `${API.ICON_URL_DOMAIN}/${weather.icon}@2x.png`,
            };
          }),
          rain: payload.rain,
          snow: payload.snow,
          wind: payload.wind,
        },
        loading: false,
        error: undefined,
      },
    };
    expect(city(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_CITY_INFORMATION_FAILURE', () => {
    const payload: Interfaces.ExceptionData = {
      cityName,
      countryCode,
      message: 'Unable to load the data',
    };
    const action = actions.LOAD_CITY_INFORMATION_FAILURE(payload);
    const expectedState: Interfaces.CityStore = {
      ...initialState,
      [id]: {
        data: undefined,
        loading: false,
        error: payload.message,
      },
    };
    expect(city(initialState, action)).toEqual(expectedState);
  });
});
