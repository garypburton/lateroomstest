import types from './types';
import * as constants from '../constants';

const willFetchHotelData = () => ({
  type: types.HOTEL_DATA_STATUS,
  payload: {
    status: constants.HOTEL_DATA_PENDING,
  },
});

const didFetchHotelData = () => ({
  type: types.HOTEL_DATA_STATUS,
  payload: {
    status: constants.HOTEL_DATA_COMPLETE,
  },
});

const failedToFetchHotelData = () => ({
  type: types.HOTEL_DATA_STATUS,
  payload: {
    status: constants.HOTEL_DATA_FAILED,
  },
});

const hotelDataResult = data => ({
  type: types.HOTEL_DATA_RESULT,
  payload: {
    ...data,
  },
});

export default {
  willFetchHotelData,
  didFetchHotelData,
  failedToFetchHotelData,
  hotelDataResult,
};
