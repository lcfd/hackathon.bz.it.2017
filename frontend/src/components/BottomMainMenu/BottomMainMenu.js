import React, { Component } from 'react';
import '../../css/bottomMainMenu.css';

class BottomMainMenu extends Component {
  render() {
    return <div className="bottomMainMenu">{this.props.children}</div>;
  }
}

export default BottomMainMenu;
