import actions from './actions';

const getHotelData = () => async dispatch => {
  const {
    willFetchHotelData,
    didFetchHotelData,
    failedToFetchHotelData,
    hotelDataResult,
  } = actions;
  const data = {};

  dispatch(willFetchHotelData());
  try {
    data.hotels = await (await fetch('/hotels.json')).json();
    data.filterTerms = data.hotels
      .map(hotel => hotel.facilities)
      .reduce((prev, current) =>
        prev.concat(current.filter(val => !prev.includes(val)))
      );
    dispatch(hotelDataResult(data));
    dispatch(didFetchHotelData());
  } catch (error) {
    dispatch(failedToFetchHotelData());
  }
};

export default { getHotelData };
