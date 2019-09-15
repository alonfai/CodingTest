export const ICON_URL_DOMAIN = 'http://openweathermap.org/img/wn';

export interface GeoLocation {
  lon: number;
  lat: number;
}

export interface Weather {
  /**
   * condition id
   */
  id: number;
  /**
   * group of weather conditions
   */
  main: string;
  /**
   * condition within the group
   */
  description: string;
  /**
   * icon id
   */
  icon: string;
}

export interface Main {
  /**
   * Temprature
   */
  temp: number;
  /**
   * Amospheric pressure
   */
  pressure: number;
  /**
   * Humidity %
   */
  humidity: number;
  /**
   *  Minimum temperature at the moment.
   */
  temp_min: number;
  /**
   *  Maximum temperature at the moment
   */
  temp_max: number;
  /**
   * Atmospheric pressure on the sea level
   */
  sea_level?: number;
  /**
   * Atmospheric pressure on the ground level
   */
  grnd_level?: number;
}

export interface Wind {
  /**
   * Wind speed
   */
  speed: number;
  /**
   * Wind direction, degrees
   */
  deg: number;
}

export interface Cloud {
  /**
   * Cloudiness, %
   */
  all: number;
}

export interface Rain {
  /**
   * Rain volume for the last 1 hour, mm
   */
  '1h': number;
  /**
   * Rain volume for the last 3 hours, mm
   */
  '3h': number;
}

export interface Snow {
  /**
   * Snow volume for the last 1 hour, mm
   */
  '1h': number;
  /**
   * Snow volume for the last 3 hours, mm
   */
  '3h': number;
}

export interface System {
  /**
   * Internal parameter
   */
  type: number;
  /**
   * Internal parameter
   */
  id: number;
  /**
   * Internal parameter
   */
  message: number;
  /**
   * Country code (GB, JP etc.)
   */
  country: string;
  /**
   * Sunrise time, unix, UTC
   */
  sunrise: number;
  /**
   * Sunset time, unix, UTC
   */
  sunset: number;
}

export interface ApiResponse {
  /**
   * City Geo location
   */
  coord: GeoLocation;
  /**
   * weather condition info
   */
  weather: Weather[];
  /**
   * internal parameter
   */
  base: string;
  /**
   * Temprature readings
   */
  main: Main;
  /**
   * Wind information
   */
  wind?: Wind;
  /**
   * clouds information
   */
  clouds?: Cloud;
  /**
   * Rain information
   */
  rain?: Rain;
  /**
   * Snow information
   */
  snow?: Snow;
  /**
   * Time of data calculation, unix, UTC
   */
  dt: number;
  /**
   * System data
   */
  sys: System;
  /**
   * Shift in seconds from UTC
   */
  timezone: number;
  /**
   * City ID
   */
  id: number;
  /**
   * City name
   */
  name: string;
  /**
   * Internal parameter
   */
  cod: number;
}
