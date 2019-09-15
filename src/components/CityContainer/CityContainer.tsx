import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Interfaces, AppDispatch, actions } from 'store';
import { request } from 'api';
import CityRecord from '../CityRecord';

const Container = styled.div`
  display: flex;
  flex-basis: 30%;
  min-width: 400px;
  flex-direction: column;
  margin: 2rem;
  justify-content: space-evenly;
  border: 1px solid transparent;
  border-color: #ddd;
  padding: 1rem;
`;

const Header = styled.h1`
  font-basis: 2rem;
  text-decoration: underline;
`;

export interface ComponentProps {
  /**
   * location for the city
   */
  location: Interfaces.LocationInput;
}

const CityContainer: React.FC<ComponentProps> = ({ location }) => {
  const itemId = `${location.cityName}_${location.countryCode}`.toLowerCase();
  const cityItem: Interfaces.CityItem = useSelector((state: Interfaces.ReduxStore) => state.cities[itemId]);
  const dispatch = useDispatch<AppDispatch>();

  // Fetch the city information from the API
  useEffect(() => {
    dispatch(actions.LOAD_CITY_INFORMATION(location));
    const fetchData = async () => {
      try {
        const { cityName, countryCode } = location;
        const response = await request(cityName, countryCode);
        dispatch(actions.LOAD_CITY_INFORMATION_SUCCESS(response));
      } catch (e) {
        const exceptionData: Interfaces.ExceptionData = {
          ...location,
          message: e,
        };
        dispatch(actions.LOAD_CITY_INFORMATION_FAILURE(exceptionData));
      }
    };
    fetchData();
  }, [location, dispatch]);

  if (!cityItem) {
    return null;
  }

  return (
    <Container>
      <Header title={location.cityName}>{location.cityName}</Header>
      <CityRecord item={cityItem} />
    </Container>
  );
};

export default CityContainer;
