import { connect } from 'react-redux';
import Home from './HomeComponent';
import { homeOperations } from './duck';

const mapStateTopProps = ({ homeReducer }) => {
  const {
    hotelDataStatus: { status },
    hotelDataResult,
  } = homeReducer;

  return {
    status,
    ...hotelDataResult,
  };
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(homeOperations.getHotelData()),
});

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Home);
