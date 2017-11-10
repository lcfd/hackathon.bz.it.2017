import React, { Component } from 'react';
import { connect } from 'react-redux';

class InvestmentsContainer extends Component {
  render() {
    return <div>InvestmentsContainer</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(InvestmentsContainer);
