import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';
import { ProfileHeader } from '../components/ProfileHeader';

/**
 * css
 */
import '../css/profile.css';
/**
 * assets
 */
import peterDolonPic from '../assets/img/peterDolonPic.png';
import totalCake from '../assets/img/totalCake.png';

class ProfileContainer extends Component {
  render() {
    return (
      <AppWrapper class="profile container">
        <ProfileHeader userPic={peterDolonPic} user={{ name: 'Peter Dolon' }} />
        <div className="row profile__month-select">
          <div className="col-4 right">JUL 2017</div>
          <div className="col-4">
            <span className="centered">AUG 2017</span>
          </div>
          <div className="col-4 left">SEPT 2017</div>
        </div>
        <p className="profile__centered-title">TOTAL EXPENSES</p>
        <p className="profile__centered-money">€ 500.00</p>
        <img className="profile__cake-chart" src={totalCake} alt="" />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(ProfileContainer);
