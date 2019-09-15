import { createReducer, PayloadAction } from 'redux-starter-kit';

import { Interfaces as API } from 'api';
import * as actions from '../actions';
import * as Interfaces from '../interfaces';

export const initialState = {};

// Note: createReducer here uses "immer" library to let us write reducers as if we are mutating the state directly (ref: https://redux-starter-kit.js.org/api/createreducer#direct-state-mutation)

const city = createReducer<Interfaces.CityStore>(initialState, {
  [actions.LOAD_CITY_INFORMATION.toString()]: (state, action: PayloadAction<Interfaces.LocationInput>) => {
    const { payload } = action;
    const id = `${payload.cityName}_${payload.countryCode}`.toLowerCase();
    state[id] = {
      loading: true,
      data: undefined,
      error: undefined,
    };
  },

  [actions.LOAD_CITY_INFORMATION_SUCCESS.toString()]: (state, action: PayloadAction<API.ApiResponse>) => {
    const { payload } = action;
    const cityData: Interfaces.CityItem = {
      data: {
        name: payload.name,
        temprature: payload.main && payload.main.temp,
        conditions: payload.weather.map(weather => {
          const { icon } = weather;
          delete weather.icon;
          return {
            ...weather,
            // Replace the icon with a URL
            icon_url: `${API.ICON_URL_DOMAIN}/${icon}@2x.png`,
          };
        }),
        rain: payload.rain,
        snow: payload.snow,
        wind: payload.wind,
      },
      loading: false,
      error: undefined,
    };
    const id = `${payload.name}_${payload.sys.country}`.toLowerCase();
    state[id] = cityData;
  },

  [actions.LOAD_CITY_INFORMATION_FAILURE.toString()]: (state, action: PayloadAction<Interfaces.ExceptionData>) => {
    const { payload } = action;
    const id = `${payload.cityName}_${payload.countryCode}`.toLowerCase();
    state[id] = {
      loading: false,
      data: undefined,
      error: payload.message,
    };
  },
});

export default city;
