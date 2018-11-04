import React, { Component } from 'react';

export class HomeComponent extends Component {
  componentDidMount() {
    const { getData } = this.props;

    getData();
  }

  render() {
    console.log(this.props);
    return <div>Home</div>;
  }
}

export default HomeComponent;
