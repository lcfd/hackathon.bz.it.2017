import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';

class InvestmentsContainer extends Component {
  render() {
    return <AppWrapper>InvestmentsContainer</AppWrapper>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(InvestmentsContainer);
