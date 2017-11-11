import React, { Component } from 'react';
import { connect } from 'react-redux';

class SetPercContainer extends Component {
  render() {
    return <div>SetPercContainer</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(SetPercContainer);
