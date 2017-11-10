import React, { Component } from 'react';

class Box extends Component {
  render() {
    return <div className="box col-12">{this.props.children}</div>;
  }
}

export default Box;
