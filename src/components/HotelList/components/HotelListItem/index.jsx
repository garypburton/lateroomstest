import React from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating';

const Item = styled.li`
  width: 100%;
`;

const Name = styled.h2`
  font-size: 20px;
`;

const Facilities = styled.ul`
  margin-bottom: 20px;
`;

const Facility = styled.li`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 14px;
`;

function HotelListItem({ facilities, name, starRating }) {
  return (
    <Item>
      <Name>{name}</Name>
      <StarRating rating={starRating} />
      <Facilities>
        {facilities.map(facility => (
          <Facility key={facility}>{facility}</Facility>
        ))}
      </Facilities>
    </Item>
  );
}

export default HotelListItem;
