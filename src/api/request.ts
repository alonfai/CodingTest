import axios from 'axios';

import { ApiResponse } from './interfaces';

/**
 * API Key id read from the environment variable
 */
const APPID = process.env.REACT_APP_APPID;

export const API_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&units=metric&q=`;

/**
 * API Request headers
 */
export const API_HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json' };

/**
 * Makes an API call to retrieve weather information for a given city
 * @param city city name
 * @param country country code based as ISO 3166
 */
const fetchData = async (city: string, country: string): Promise<ApiResponse> => {
  try {
    const url = `${API_URL}${city},${country}`;
    const { data } = await axios.get(encodeURI(url), {
      headers: API_HEADERS,
    });

    return data;
  } catch (err) {
    let msg = '';
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      msg = `${err.response.data.message}, statusCode = ${err.response.status}`;
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      msg = err.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      msg = err.message;
    }
    return Promise.reject(`Could not fetch data from API server for "${city}" ( Received message: ${msg} )`);
  }
};

export default fetchData;
