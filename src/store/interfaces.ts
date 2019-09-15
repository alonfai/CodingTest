import { Interfaces as API } from 'api';

/**
 * User input to retrieve city weather information
 */
export interface LocationInput {
  /**
   * City name
   */
  cityName: string;
  /**
   * ISO 3166 country code
   */
  countryCode: string;
}

/**
 * Exception data on API fetch request for city weather
 */
export interface ExceptionData extends LocationInput {
  /**
   * error message returned from the server
   */
  message: string;
}

/**
 * City condition interface data in UI
 */
export interface Condition extends Omit<API.Weather, 'icon'> {
  /**
   * URL for the icon of the weather condition
   */
  icon_url: string;
}

/**
 * Weather data for a city in the store
 */
export interface CityData {
  /**
   * Name of city
   */
  name: string;
  /**
   * Current temprature of the ciuty
   */
  temprature: number;
  /**
   * Weather condition
   */
  conditions: Condition[];
  /**
   * rain information
   */
  rain?: API.Rain;
  /**
   * snow information
   */
  snow?: API.Snow;
  /**
   * wind information
   */
  wind?: API.Wind;
}

/**
 * Full data object for a city with information, loading state and an optional error exceptions from API (if occured while fetching the data)
 */
export interface CityItem {
  /**
   * data collection
   */
  data?: CityData;
  /**
   * Does the
   */
  loading: boolean;

  /**
   * Exception data returned from the server
   */
  error?: string;
}

/**
 * City reducer data reprentation with key of "{city_name}_{country_code}" and value is actual api response
 */
export interface CityStore {
  [id: string]: CityItem;
}

/**
 * Reference to the store main data type
 */
export interface ReduxStore {
  /**
   * Reducer with all cities information
   */
  cities: CityStore;
}
