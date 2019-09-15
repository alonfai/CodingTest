import mockAxios from 'axios';

import { getWeatherInformation } from 'utils/mocks';
import fetchData, { API_HEADERS, API_URL } from './request';

describe('fetchData', () => {
  const city = 'sydney';
  const country = 'au';

  it('call axios and return ApiResponse information from the API', async () => {
    const data = getWeatherInformation();
    (mockAxios.get as any).mockImplementationOnce(() => Promise.resolve(data));

    const response = await fetchData(city, country);
    // expect(response).toEqual(data);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`${API_URL}${city},${country}`, {
      headers: API_HEADERS,
    });
  });

  it('call axios and throw an exception', async () => {
    (mockAxios.get as any).mockImplementationOnce(() => Promise.reject(new Error('Unable to load data')));
    try {
      return await fetchData(city, country);
    } catch (e) {
      expect(e).toEqual('Could not fetch data from API server for "sydney" ( Received message: Unable to load data )');
    }
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('check for error response message', async () => {
    const err = {
      response: {
        data: {
          message: 'Unable to load data',
        },
        status: 500,
      },
    };
    (mockAxios.get as any).mockImplementationOnce(() => Promise.reject(err));
    try {
      return await fetchData(city, country);
    } catch (e) {
      expect(e).toEqual('Could not fetch data from API server for "sydney" ( Received message: Unable to load data, statusCode = 500 )');
    }
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('check for error request data field', async () => {
    const err = {
      request: 'Unable to retireve data from request'
    };
    (mockAxios.get as any).mockImplementationOnce(() => Promise.reject(err));
    try {
      return await fetchData(city, country);
    } catch (e) {
      expect(e).toEqual('Could not fetch data from API server for "sydney" ( Received message: Unable to retireve data from request )');
    }
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
