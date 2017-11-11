import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../containers/AppWrapper';
import { PageHeader } from '../components/PageHeader';
import { Box } from '../components/Box';

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
  render() {
    return (
      <AppWrapper class="investments container">
        <PageHeader class="investments__header" main="Your investment" />
        <Box>
          <img className="investments__box-main-img" src={investmentsMainIcon} alt="" />
          <p className="box__weekly-stats">YOUR INVESTMENT VALUE</p>
          <p className="box__weekly-stats-amount">
            € <strong>834</strong>
          </p>
          {/* <p className="box__current-gain-success">+16.43(4.56%)</p> */}
          <p className="box__current-gain-gray">Invested value €631</p>
          <p className="box__sell-button" onClick={() => alert('SELL MAAAAAN')}>
            SELL
          </p>
        </Box>
        {/* <p className="box__investment-this-week">TREND CHART</p> */}
        <p className="box__investment-sected-money-value">NAV € 180.032 (30/9/2017)</p>
        <p className="box__investment-sected-money-value--small">FUND TREND</p>
        <p className="box__current-gain-success--small">Grow of 1000 (EUR) +16.43 (4.56%)</p>

        <img className="box__investment-graph" src={mockedGraph} alt="" />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(InvestmentsContainer);
