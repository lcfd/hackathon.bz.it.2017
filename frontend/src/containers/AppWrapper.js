import React, { Component } from 'react';
import { BottomMainMenu } from '../components/BottomMainMenu';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';

import dashboard from '../assets/img/dashboard.svg';
import investments from '../assets/img/investments.svg';
import profile from '../assets/img/profile.svg';

class AppWrapper extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <div className={this.props.class}>
        {this.props.children}
        <BottomMainMenu>
          <div className="bottomMainMenu__element">
            <Link to="/">
              <p>
                <img src={dashboard} alt="" />
              </p>
              <p>Dashboard</p>
            </Link>
          </div>
          <div className="bottomMainMenu__element">
            <Link to="/investments">
              <p>
                <img src={investments} alt="" />
              </p>
              <p>Investments</p>
            </Link>
          </div>
          <div className="bottomMainMenu__element">
            <Link to="/profile">
              <p>
                <img src={profile} alt="" />
              </p>
              <p>Profile</p>
            </Link>
          </div>
        </BottomMainMenu>
        <Notifications notifications={notifications} da />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    notifications: state.notifications
  };
};

export default connect(mapStateToProps, {})(AppWrapper);
