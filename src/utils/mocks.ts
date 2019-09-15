import { Interfaces as API } from 'api';

export function getCoordsData(): API.GeoLocation {
  return {
    lat: 37.39,
    lon: -122.08,
  };
}

export function getConditions(): API.Weather[] {
  return [
    {
      id: 701,
      main: 'Mist',
      description: 'mist',
      icon: '50d',
    },
    {
      id: 300,
      main: 'Drizzle',
      description: 'light intensity drizzle',
      icon: '09d',
    },
  ];
}

export function getMainData(): API.Main {
  return {
    temp: 296.71,
    pressure: 1013,
    humidity: 53,
    temp_min: 294.82,
    temp_max: 298.71,
  };
}

export function getWindData(): API.Wind {
  return {
    speed: 1.5,
    deg: 350,
  };
}

export function getCloudData(): API.Cloud {
  return {
    all: 1,
  };
}

export function getRainData(): API.Rain {
  return {
    '1h': 10,
    '3h': 5,
  };
}

export function getSnowData(): API.Snow {
  return {
    '1h': 10,
    '3h': 25,
  };
}

export function getSysData(): API.System {
  return {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: 'US',
    sunrise: 1560343627,
    sunset: 1560396563,
  };
}

/**
 * Get a mock version of the store with list of customers
 */
export function getWeatherInformation(): API.ApiResponse {
  return {
    base: 'stations',
    clouds: getCloudData(),
    coord: getCoordsData(),
    timezone: -25200,
    id: 420006353,
    name: 'Mountain View',
    cod: 200,
    dt: 1560350645,
    main: getMainData(),
    rain: getRainData(),
    snow: getSnowData(),
    sys: getSysData(),
    weather: getConditions(),
    wind: getWindData(),
  };
}
