import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  render() {
    return <div>Login</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(LoginContainer);
