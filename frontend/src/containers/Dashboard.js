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
import fuel from '../assets/img/fuel.svg';
import hambuger from '../assets/img/hamburger.svg';
import plane from '../assets/img/plane.png';
import ecommerce from '../assets/img/ecommerce.svg';

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
        {/* Investments */}
        <Box>
          <div className="box__investment-content">
            <p className="box__investment-title">
              <img src={fuel} alt="" /> Fuel
            </p>
            <p className="box__investment-text">When I buy fuel I want to invest the 10% of what I paid.</p>
            <div className="box__investment-perc-oval">5%</div>
          </div>
          <div className="box__left-arrow-action">
            <img className="" src={arrowRight} alt="" />
          </div>
          <div className="clear" />
        </Box>
        <Box>
          <div className="box__investment-content">
            <p className="box__investment-title">
              <img src={hambuger} alt="" /> Fast food
            </p>
            <p className="box__investment-text">
              When I buy a meal from a fast food I want to invest the 10% of what I paid.
            </p>
            <div className="box__investment-perc-oval">3%</div>
          </div>
          <div className="box__left-arrow-action">
            <img className="" src={arrowRight} alt="" />
          </div>
          <div className="clear" />
        </Box>
        <Box>
          <div className="box__investment-content">
            <p className="box__investment-title">
              <img src={ecommerce} alt="" /> Ecommerce
            </p>
            <p className="box__investment-text">
              When I buy products from an ecommerce I want to invest the 10% of what I paid.
            </p>
            <div className="box__investment-perc-oval">10%</div>
          </div>
          <div className="box__left-arrow-action">
            <img className="" src={arrowRight} alt="" />
          </div>
          <div className="clear" />
        </Box>
        <Box>
          <div className="box__investment-content">
            <p className="box__investment-title">
              <img src={plane} style={{ width: '24px' }} alt="" />Transport
            </p>
            <p className="box__investment-text">When I travel I want to invest the 7% of what I paid.</p>
            <div className="box__investment-perc-oval">7%</div>
          </div>
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
