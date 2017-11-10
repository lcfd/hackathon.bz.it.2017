import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';

class ProfileContainer extends Component {
  render() {
    return <AppWrapper>ProfileContainer</AppWrapper>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(ProfileContainer);
