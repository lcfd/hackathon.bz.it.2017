import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';
import { PageHeader } from '../components/PageHeader';
import { Box } from '../components/Box';
import { SideMenu } from '../components/SideMenu';

import { set_invested_value_3_month } from '../actions/user';
import { dashboardMonthAggregation } from './utils/dataAggregations';

/**
 * css
 */
import '../css/investments.css';
/**
 * assets
 */
import investmentsMainIcon from '../assets/img/investmentsMainIcon.svg';
import mockedGraph from '../assets/img/mockedGraph.png';

class InvestmentsContainer extends Component {
  componentDidMount() {
    if (!this.props.user.investedValue3Month) {
      let aggregation = dashboardMonthAggregation(this.props, 2);
      let aggregationPastMonth = dashboardMonthAggregation(this.props, 3);
      let aggregationPastPastMonth = dashboardMonthAggregation(this.props, 4);
      let monthlyAverage = parseInt(aggregation) + parseInt(aggregationPastMonth) + parseInt(aggregationPastPastMonth);
      this.props.set_invested_value_3_month(monthlyAverage);
    }
  }

  render() {
    return (
      <AppWrapper class="investments container">
        <PageHeader class="investments__header" main="Your investment" />
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3">
            <SideMenu />
          </div>
          <div className="col-12 col-sm-12 col-md-9 investments__container-min-height">
            <Box>
              <img className="investments__box-main-img" src={investmentsMainIcon} alt="" />
              <p className="box__weekly-stats">CURRENT INVESTMENT VALUE</p>
              <p className="box__weekly-stats-amount">
                € <strong>{(parseInt(this.props.user.investedValue3Month) * 1.42).toFixed(2)}</strong>
              </p>
              {/* <p className="box__current-gain-success">+16.43(4.56%)</p> */}
              <p className="box__current-gain-gray">
                Invested value €{parseInt(this.props.user.investedValue3Month).toFixed(2)}
              </p>
              <p className="box__sell-button" onClick={() => alert('SELL MAAAAAN')}>
                SELL
              </p>
            </Box>
            {/* <p className="box__investment-this-week">TREND CHART</p> */}
            <p className="box__investment-sected-money-value">NAV € 180.032 (30/9/2017)</p>
            <p className="box__investment-sected-money-value--small">FUND TREND</p>
            <p className="box__current-gain-success--small">Grow of 1000 (EUR) +16.43 (4.56%)</p>

            <img className="box__investment-graph" src={mockedGraph} alt="" />
          </div>
        </div>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { set_invested_value_3_month })(InvestmentsContainer);
