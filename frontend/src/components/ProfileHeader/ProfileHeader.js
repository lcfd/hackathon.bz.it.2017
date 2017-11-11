import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile__header">
        <div className="container">
          <div className="row">
            <div className="col-1 col-sm-2 col-md-4 col-lg-5" />
            <div className="col-3 col-sm-2 col-md-1 col-lg-1">
              <img className="profile__header-user-pic" src={this.props.userPic} alt="" />
            </div>
            <div className="col-7 col-lg-6">
              Hi <strong>{this.props.user.name}</strong> 👋
            </div>
            <div className="col-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
