import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardContainer extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(DashboardContainer);
