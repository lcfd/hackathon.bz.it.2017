import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile__header">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-3">
              <img className="profile__header-user-pic" src={this.props.userPic} alt="" />
            </div>
            <div className="col-7">
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
