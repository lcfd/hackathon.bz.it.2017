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
      monthSelected: 2
    };
  }

  componentDidMount() {
    let aggregation = dashboardMonthAggregationNoPerc(this.props, 2);
    let totalExpenses = parseInt(aggregation.finalSum);
    this.setState({
      totalExpenses: {
        finalSum: totalExpenses,
        totEcommerce: parseInt(aggregation.totEcommerce),
        totFastFood: parseInt(aggregation.totFastFood),
        totFuel: parseInt(aggregation.totFuel),
        totTransport: parseInt(aggregation.totTransport)
      }
    });
  }

  handleSelectCurrentMonth = id => {
    let aggregation = dashboardMonthAggregationNoPerc(this.props, id);
    let totalExpenses = parseInt(aggregation.finalSum);
    this.setState({
      totalExpenses: {
        finalSum: totalExpenses,
        totEcommerce: parseInt(aggregation.totEcommerce),
        totFastFood: parseInt(aggregation.totFastFood),
        totFuel: parseInt(aggregation.totFuel),
        totTransport: parseInt(aggregation.totTransport)
      },
      monthSelected: id
    });
  };

  render() {
    console.log(this.state.totalExpenses);
    const { totalExpenses } = this.state;
    const { totFuel, totEcommerce, totFastFood, totTransport } = totalExpenses;
    
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
                className={`col-4 right ${this.state.monthSelected === 4 ? 'selected' : ''}`}
                onClick={e => {
                  this.handleSelectCurrentMonth(4);
                }}
              >
                <span>JUL 2017</span>
              </div>
              <div
                className={`col-4 ${this.state.monthSelected === 3 ? 'selected' : ''}`}
                onClick={e => {
                  this.handleSelectCurrentMonth(3);
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
            {totFuel || totEcommerce || totFastFood || totTransport ? (
              <ProfileChart
                label={['Fuel', 'E-commerce', 'Fast food', 'Transport']}
                values={[totFuel, totEcommerce, totFastFood, totTransport]}
              />
            ) : null}
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
