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
          <div className="col-4 right">SEPT 2017</div>
          <div className="col-4">
            <span className="centered">OCT 2017</span>
          </div>
          <div className="col-4 left">NOV 2017</div>
        </div>
        <img className="profile__cake-chart" src={totalCake} alt="" />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(ProfileContainer);
