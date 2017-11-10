import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
  render() {
    return <div>ProfileContainer</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(ProfileContainer);
