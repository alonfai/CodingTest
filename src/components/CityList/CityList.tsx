import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Interfaces } from 'store';
import CityContainer from 'components/CityContainer';

const Container = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export interface ComponentProps {
  locations: Interfaces.LocationInput[];
}

const CityList: React.FC<ComponentProps> = ({ locations }) => {
  return (
    <Container>
      {locations.map(location => (
        <CityContainer key={v4()} location={location} />
      ))}
    </Container>
  );
};

export default CityList;
