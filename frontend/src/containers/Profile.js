import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';
import { ProfileHeader } from '../components/ProfileHeader';

import { dashboardMonthAggregationNoPerc } from './utils/dataAggregations';
import { SideMenu } from '../components/SideMenu';
import { ProfileChart } from '../components/ProfileChart';

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
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: {
        finalSum: 0,
        totEcommerce: 0,
        totFastFood: 0,
        totFuel: 0,
        totTransport: 0
      },
      monthSelected: 1
    };
  }

  componentDidMount() {
    let aggregation = dashboardMonthAggregationNoPerc(this.props, 2);
    let aggregationPastMonth = dashboardMonthAggregationNoPerc(this.props, 3);
    let aggregationPastPastMonth = dashboardMonthAggregationNoPerc(this.props, 4);
    let totalExpenses =
      parseInt(aggregation.finalSum) +
      parseInt(aggregationPastMonth.finalSum) +
      parseInt(aggregationPastPastMonth.finalSum);
    this.setState({
      totalExpenses: {
        finalSum: totalExpenses,
        totEcommerce:
          parseInt(aggregation.totEcommerce) +
          parseInt(aggregationPastMonth.totEcommerce) +
          parseInt(aggregationPastPastMonth.totEcommerce),
        totFastFood:
          parseInt(aggregation.totFastFood) +
          parseInt(aggregationPastMonth.totFastFood) +
          parseInt(aggregationPastPastMonth.totFastFood),
        totFuel:
          parseInt(aggregation.totFuel) +
          parseInt(aggregationPastMonth.totFuel) +
          parseInt(aggregationPastPastMonth.totFuel),
        totTransport:
          parseInt(aggregation.totTransport) +
          parseInt(aggregationPastMonth.totTransport) +
          parseInt(aggregationPastPastMonth.totTransport)
      }
    });
  }

  handleSelectCurrentMonth = id => {
    this.setState({ monthSelected: id });
  };

  render() {
    console.log(this.state.totalExpenses);

    return (
      <AppWrapper class="profile container">
        <ProfileHeader userPic={peterDolonPic} user={{ name: 'Peter Dolon' }} />
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 hidden-sm-down">
            <SideMenu />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 investments__container-min-height">
            <div className="row profile__month-select">
              <div
                className={`col-4 right ${this.state.monthSelected === 0 ? 'selected' : ''}`}
                onClick={e => {
                  this.handleSelectCurrentMonth(0);
                }}
              >
                <span>JUL 2017</span>
              </div>
              <div
                className={`col-4 ${this.state.monthSelected === 1 ? 'selected' : ''}`}
                onClick={e => {
                  this.handleSelectCurrentMonth(1);
                }}
              >
                <span className="centered ">AUG 2017</span>
              </div>
              <div
                className={`col-4 left ${this.state.monthSelected === 2 ? 'selected' : ''}`}
                onClick={e => {
                  this.handleSelectCurrentMonth(2);
                }}
              >
                <span>SEPT 2017</span>
              </div>
            </div>
            <p className="profile__centered-title">TOTAL EXPENSES</p>
            <p className="profile__centered-money">€ {this.state.totalExpenses.finalSum}</p>
            <ProfileChart />
          </div>
        </div>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(ProfileContainer);
