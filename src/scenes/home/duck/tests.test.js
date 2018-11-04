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

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('gets data and creates correct data and action in store', () => {
    fetchMock.getOnce('/hotels.json', {
      body: [
        {
          name: 'hotelone',
          starRating: 5,
          facilities: ['car park', 'pool'],
        },
        {
          name: 'hoteltwo',
          starRating: 3,
          facilities: ['car park', 'gym'],
        },
        {
          name: 'hotelthree',
          starRating: 3,
          facilities: [],
        },
      ],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: types.HOTEL_DATA_STATUS,
        payload: {
          status: 'hoteldata:status:pending',
        },
      },
      {
        type: types.HOTEL_DATA_RESULT,
        payload: {
          hotels: [
            {
              name: 'hotelone',
              starRating: 5,
              facilities: ['car park', 'pool'],
            },
            {
              name: 'hoteltwo',
              starRating: 3,
              facilities: ['car park', 'gym'],
            },
            {
              name: 'hotelthree',
              starRating: 3,
              facilities: [],
            },
          ],
          filterTerms: ['car park', 'pool', 'gym'],
        },
      },
      {
        type: types.HOTEL_DATA_STATUS,
        payload: {
          status: 'hoteldata:status:complete',
        },
      },
    ];
    const store = mockStore({
      hotelDataResult: {
        hotels: [],
        filterTerms: [],
      },
    });

    return store.dispatch(operations.getHotelData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
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
