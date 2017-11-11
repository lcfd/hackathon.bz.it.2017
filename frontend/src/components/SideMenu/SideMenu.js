import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../css/sidemenu.css';
import peterDolonPic from '../../assets/img/peterDolonPic.png';
import dashboard from '../../assets/img/dashboard.svg';
import investments from '../../assets/img/investments.svg';
import profile from '../../assets/img/profile.svg';

class SideMenu extends Component {
  render() {
    return (
      <div className="sidemenu">
        <div className="container">
          <div className="row">
            <div className="col-1 hidden-md-up" />
            <div className="col-3 col-md-4">
              <img className="profile__header-user-pic" src={peterDolonPic} alt="" />
            </div>
            <div className="col-7 col-md-8 sidemenu__hi">
              Hi <strong>{this.props.user.fullName}</strong> 👋
            </div>
            <div className="col-1 hidden-md-up" />

            <div className="col-12 ">
              <br />
              <p>MENU</p>
            </div>
            <div className="col-12 ">
              <ul className="sidemenu__menu-list">
                <li>
                  <Link to="/">
                    <p>
                      <img src={dashboard} alt="" />
                    </p>
                    <p>Dashboard</p>
                  </Link>
                  <div className="clear" />
                </li>
                <li>
                  <Link to="/investments">
                    <p>
                      <img src={investments} alt="" />
                    </p>
                    <p>Investments</p>
                  </Link>
                  <div className="clear" />
                </li>
                <li>
                  <Link to="/profile">
                    <p>
                      <img src={profile} alt="" />
                    </p>
                    <p>Profile</p>
                  </Link>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(SideMenu);
