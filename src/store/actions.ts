import { createAction } from 'redux-starter-kit';
import { Interfaces as API } from 'api';
import { LocationInput, ExceptionData } from './interfaces';

/**
 * Action that dispatch loading of city weather information
 */
export const LOAD_CITY_INFORMATION = createAction<LocationInput>('weather/get');

/**
 * SUCCESS response action when API return with city weather information
 */
export const LOAD_CITY_INFORMATION_SUCCESS = createAction<API.ApiResponse>('weather/get_success');

/**
 * FAILURE response action when API return with an error object on retriving city weather information
 */
export const LOAD_CITY_INFORMATION_FAILURE = createAction<ExceptionData>('weather/get_failure');
