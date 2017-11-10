import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppWrapper from '../containers/AppWrapper';
import { DashboardHeader } from '../components/DashboardHeader';
import { Box } from '../components/Box';

/**
 * css
 */
import '../css/dashboard.css';
/**
 * assets
 */
import salvadanaio from '../assets/img/salvadanaio.svg';
import arrowRight from '../assets/img/arrow-right.svg';

class DashboardContainer extends Component {
  render() {
    return (
      <AppWrapper class="dashboard container">
        <DashboardHeader />
        <Box>
          <img className="dashboard__box-salvadanaio-img" src={salvadanaio} alt="" />
          <p className="box__weekly-stats">WEEKLY STATS</p>
          <p className="box__weekly-stats-amount">
            € <strong>40,00</strong>
          </p>
          <p className="box__investment-this-week">Investment this week</p>
          <hr style={{ marginBottom: 0 }} />
          <div className="row">
            <div className="col-6">
              <p className="box__text-number-in-split">
                € <strong>40,00</strong>
              </p>
              <p className="box__text-under-number">Weekly average</p>
              <div className="box__weekly-vertical-line" />
            </div>

            <div className="col-6">
              <p className="box__text-number-in-split">
                € <strong>40,00</strong>
              </p>
              <p className="box__text-under-number">Average investment</p>
            </div>
          </div>
        </Box>
        <p className="dashboard__your-active-investmets">YOUR ACTIVE INVESTMENTS</p>
        <Box>
          <div className="box__investment-content">
            <p className="box__investment-title">Fuel</p>
          </div>
          <div className="box__left-arrow-action">
            <img className="" src={arrowRight} alt="" />
          </div>
          <div className="clear" />
        </Box>
        <Box>
          1
          <div className="box__left-arrow-action">
            <img className="" src={arrowRight} alt="" />
          </div>
          <div className="clear" />
        </Box>
        <Box>
          1
          <div className="box__left-arrow-action">
            <img className="" src={arrowRight} alt="" />
          </div>
          <div className="clear" />
        </Box>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(DashboardContainer);
