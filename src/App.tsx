import React from 'react';

import { Interfaces } from 'store';
import CityList from 'components/CityList';

const App: React.FC = () => {
  const locations: Interfaces.LocationInput[] = [
    {
      cityName: 'Sydney',
      countryCode: 'au',
    },
    {
      cityName: 'Darwin',
      countryCode: 'au',
    },
    {
      cityName: 'Canberra',
      countryCode: 'au',
    },
    {
      cityName: 'Melbourne',
      countryCode: 'au',
    },
    {
      cityName: 'Brisbane',
      countryCode: 'au',
    },
    {
      cityName: 'Adelaide',
      countryCode: 'au',
    },
    {
      cityName: 'Perth',
      countryCode: 'au',
    },
    {
      cityName: 'Hobart',
      countryCode: 'au',
    },
  ];

  return <CityList locations={locations} />;
};

export default App;
