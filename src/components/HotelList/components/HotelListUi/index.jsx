import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: 20px;
`;

function HotelListUi({ filterTerms }) {
  return (
    <Wrap>
      <fieldset>
        <legend>Filter by facilities</legend>
        {filterTerms.map(term => (
          <React.Fragment key={term}>
            <label htmlFor={term}>{term}</label>
            <input
              type="checkbox"
              name="facilityFilter[]"
              value={term}
              id={term}
            />
          </React.Fragment>
        ))}
      </fieldset>
      <fieldset>
        <label htmlFor="sortRating">
          Sort by rating
          <select name="sortRating" id="sortRating">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </label>
      </fieldset>
    </Wrap>
  );
}

export default HotelListUi;
