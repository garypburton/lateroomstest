import { combineReducers } from 'redux';
import types from './types';
import { HOTEL_DATA_IDLE } from '../constants';

const statusInitialState = {
  status: HOTEL_DATA_IDLE,
};

export const hotelDataStatus = (state = statusInitialState, action) => {
  if (action.type !== types.HOTEL_DATA_STATUS) {
    return state;
  }

  const {
    payload: { status },
  } = action;

  return { status };
};

const resultInitialState = {
  hotels: [],
  filterTerms: [],
};

export const hotelDataResult = (state = resultInitialState, action) => {
  if (action.type !== types.HOTEL_DATA_RESULT) {
    return state;
  }

  const { payload } = action;

  return { ...payload };
};

export default combineReducers({ hotelDataStatus, hotelDataResult });
