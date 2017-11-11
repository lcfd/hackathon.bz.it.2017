import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatsContainer extends Component {
  render() {
    return <div>StatsContainer</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StatsContainer);
