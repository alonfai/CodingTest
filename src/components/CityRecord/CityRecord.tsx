import React from 'react';
import styled from 'styled-components';
import { Spinner, Alert, Image } from 'react-bootstrap';
import { v4 } from 'uuid';

import { Interfaces } from 'store';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ListWrapper = styled.ul`
  font-size: 1rem;
`;

const ConditionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TextWrapper = styled.li`
  font-size: 1.5rem;
`;

export interface ComponentProps {
  /**
   * City information item
   */
  item: Interfaces.CityItem;
}

export const CityRecord: React.FC<ComponentProps> = ({ item }) => {
  const { loading, data, error } = item;
  if (loading) {
    return (
      <Container data-testid="loading">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  } else if (error || !data) {
    return (
      <Container data-testid="error">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  } else {
    return (
      <Container data-testid="record">
        <ListWrapper>
          <TextWrapper>Temprature: {data.temprature} °</TextWrapper>
          {data.conditions.map(condition => {
            return (
              <ConditionsContainer key={v4()}>
                <TextWrapper>
                  Conditions: {condition.description} <Image src={condition.icon_url} roundedCircle />
                </TextWrapper>
              </ConditionsContainer>
            );
          })}
          {data.wind && (
            <TextWrapper>
              Wind: {data.wind.deg} meter/sec, Direction: {data.wind.deg} degrees
            </TextWrapper>
          )}
          {data.rain && (
            <TextWrapper>
              Rain: {data.rain['1h'] && `${data.rain["1h"]} mm for the last 1 hour,`} {data.rain['3h'] && `${data.rain["3h"]} mm for the last 3 hours`}
            </TextWrapper>
          )}
          {data.snow && (
            <TextWrapper>
              Snow: {data.snow['1h'] && `${data.snow["1h"]} mm for the last 1 hour,`} {data.snow['3h'] && `${data.snow["3h"]} mm for the last 3 hours`}
            </TextWrapper>
          )}
        </ListWrapper>
      </Container>
    );
  }
};

export default React.memo(CityRecord);
