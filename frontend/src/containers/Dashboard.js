import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppWrapper from '../containers/AppWrapper';

class DashboardContainer extends Component {
  render() {
    return <AppWrapper>Dashboard</AppWrapper>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(DashboardContainer);
