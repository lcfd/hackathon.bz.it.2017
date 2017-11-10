import React, { Component } from 'react';
import { BottomMainMenu } from '../components/BottomMainMenu';
import { Link } from 'react-router-dom';

class AppWrapper extends Component {
  render() {
    return (
      <div className={this.props.class}>
        {this.props.children}
        <BottomMainMenu>
          <div className="bottomMainMenu__element">
            <Link to="/">Home</Link>
          </div>
          <div className="bottomMainMenu__element">
            <Link to="/investments">Investments</Link>
          </div>
          <div className="bottomMainMenu__element">
            <Link to="/profile">Profilo</Link>
          </div>
        </BottomMainMenu>
      </div>
    );
  }
}

export default AppWrapper;
