import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions from './actions';
import operations from './operations';
import { hotelDataStatus, hotelDataResult } from './reducers';
import types from './types';
import * as constants from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to change status to pending', () => {
    const status = constants.HOTEL_DATA_PENDING;
    const expectedAction = {
      type: types.HOTEL_DATA_STATUS,
      payload: {
        status,
      },
    };

    expect(actions.willFetchHotelData()).toEqual(expectedAction);
  });

  it('should create an action to change status to complete', () => {
    const status = constants.HOTEL_DATA_COMPLETE;
    const expectedAction = {
      type: types.HOTEL_DATA_STATUS,
      payload: {
        status,
      },
    };

    expect(actions.didFetchHotelData()).toEqual(expectedAction);
  });

  it('should create an action to change status to failed', () => {
    const status = constants.HOTEL_DATA_FAILED;
    const expectedAction = {
      type: types.HOTEL_DATA_STATUS,
      payload: {
        status,
      },
    };

    expect(actions.failedToFetchHotelData()).toEqual(expectedAction);
  });
});

describe('hotelDataStatus reducer', () => {
  it('should return the initial state', () => {
    expect(hotelDataStatus(undefined, {})).toEqual({
      status: constants.HOTEL_DATA_IDLE,
    });
  });
});

describe('hotelDataResult reducer', () => {
  it('should return the initial state', () => {
    expect(hotelDataResult(undefined, {})).toEqual({
      hotels: [],
      filterTerms: [],
    });
  });
});
