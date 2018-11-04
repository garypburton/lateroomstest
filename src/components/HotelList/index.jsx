import React from 'react';
import styled from 'styled-components';
import HotelListItem from './components/HotelListItem';
import HotelListUi from './components/HotelListUi';

const ListWrap = styled.ul`
  width: 100%;
`;

function HotelList({ hotels, filterTerms }) {
  return (
    <React.Fragment>
      <HotelListUi filterTerms={filterTerms} />
      <ListWrap>
        {hotels.map(hotel => (
          <HotelListItem {...hotel} key={hotel.name} />
        ))}
      </ListWrap>
    </React.Fragment>
  );
}

export default HotelList;
