/* @flow */
import React, { Component, lazy, Suspense } from 'react';
import Loading from '../../components/Loading';
import * as constants from './constants';

type Props = {
  filterTerms: Array<string>,
  getData: () => void,
  hotels: Array<{
    name: string,
    starRating: number,
    facilities: Array<string>,
  }>,
  status: string,
};

export class HomeComponent extends Component<Props> {
  componentDidMount() {
    const { getData } = this.props;

    getData();
  }

  renderScreen = () => {
    const { hotels, status, filterTerms } = this.props;

    if (status === constants.HOTEL_DATA_COMPLETE) {
      const HotelList = lazy(() => import('../../components/HotelList'));

      return <HotelList hotels={hotels} filterTerms={filterTerms} />;
    }
    if (status === constants.HOTEL_DATA_FAILED) {
      const Error = lazy(() => import('../../components/Error'));

      return <Error />;
    }
    return <Loading />;
  };

  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>{this.renderScreen()}</Suspense>
      </div>
    );
  }
}

export default HomeComponent;
